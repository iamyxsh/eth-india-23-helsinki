// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import {HelperLib} from "./lib/HelperLib.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {BancorFormula} from "./Bancor/Bancor.sol";
import {BondingCurve} from "./BondingCurve.sol";
import {MaxGasPrice} from "./MaxGasPrice.sol";

import "hardhat/console.sol";

interface IHelsinki {
    function init(
        uint256 amount,
        uint256 security,
        uint8 tenure,
        address safeAddress,
        uint256 slope
    ) external;
}

contract Helsinki is
    ERC1155,
    ERC1155Supply,
    ERC1155Burnable,
    ReentrancyGuard,
    BondingCurve,
    MaxGasPrice
{
    using Math for uint256;

    address public _owner;

    HelperLib.TokenType public winner;
    HelperLib.Storage public proposalStorage;

    uint256 public scale = 10 ** 18;
    uint256 public poolBalance = 1 * scale;
    uint32 public slope;

    modifier isFunded() {
        if (proposalStorage.state != HelperLib.State.FUNDED) {
            revert HelperLib.NotFunded();
        }
        _;
    }

    modifier isPassed() {
        if (proposalStorage.state != HelperLib.State.PASSED) {
            revert HelperLib.NotPassed();
        }
        _;
    }

    modifier isClosed() {
        if (proposalStorage.state != HelperLib.State.CLOSED) {
            revert HelperLib.NotClosed();
        }
        _;
    }

    modifier longerWon() {
        if (winner != HelperLib.TokenType.LONGERS) {
            revert HelperLib.LongerDidNotWin();
        }
        _;
    }

    modifier shorterWon() {
        if (winner != HelperLib.TokenType.LONGERS) {
            revert HelperLib.ShorterDidNotWin();
        }
        _;
    }

    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    constructor() ERC1155("") {}

    function init(
        uint256 amount,
        uint256 security,
        uint8 tenure,
        address safeAddress,
        uint32 _slope
    ) external nonReentrant {
        proposalStorage.amount = amount;
        proposalStorage.security = security;
        proposalStorage.tenure = tenure;
        proposalStorage.safeAddress = safeAddress;
        proposalStorage.state = HelperLib.State.CREATED;
        slope = _slope;

        proposalStorage.emisLeft = tenure;
        proposalStorage.amountPaid = 0;
        proposalStorage.emiAmount = 0;
        proposalStorage.startTime = block.timestamp;

        _owner = safeAddress;

        _mint(safeAddress, uint256(HelperLib.TokenType.LONGERS), amount, "");
        _mint(safeAddress, uint256(HelperLib.TokenType.SHORTERS), amount, "");
    }

    function innerMint(uint256 amount, HelperLib.TokenType tokenId) internal {
        _mint(msg.sender, uint256(tokenId), amount, "");
    }

    function innerBurn(uint256 amount, HelperLib.TokenType tokenId) internal {
        _burn(msg.sender, uint256(tokenId), amount);
    }

    function payEmi() external payable isPassed {
        require(msg.value >= proposalStorage.emiAmount);
        proposalStorage.emisLeft -= 1;
        proposalStorage.amountPaid += msg.value;
        if (proposalStorage.emisLeft == 0) {
            proposalStorage.state = HelperLib.State.CLOSED;
        }
    }

    function foreclose() external payable isPassed {
        require(
            msg.value >= (proposalStorage.emisLeft * proposalStorage.emiAmount)
        );
        proposalStorage.emisLeft = 0;
        proposalStorage.amountPaid += msg.value;
        proposalStorage.state = HelperLib.State.CLOSED;
    }

    function buyLong() external payable isFunded {
        require(msg.value > 0, "Must send ether to buy tokens.");
        proposalStorage.longerPool += msg.value;
        if (proposalStorage.longerPool >= proposalStorage.amount) {
            proposalStorage.state = HelperLib.State.PASSED;
            proposalStorage.interest = uint8(
                proposalStorage.longerPool / proposalStorage.shorterPool
            );
            proposalStorage.emiAmount =
                (proposalStorage.amount +
                    ((proposalStorage.amount * proposalStorage.interest) /
                        100)) /
                proposalStorage.tenure;
        }
        uint256 amount = calculateBuyReturn(
            totalSupply(uint256(HelperLib.TokenType.LONGERS)),
            msg.value,
            slope
        );

        innerMint(amount, HelperLib.TokenType.LONGERS);
    }

    function buyShort() external payable isFunded {
        require(msg.value > 0, "Must send ether to buy tokens.");
        uint256 amount = calculateBuyReturn(
            totalSupply(uint256(HelperLib.TokenType.SHORTERS)),
            msg.value,
            slope
        );
        proposalStorage.shorterPool += msg.value;
        innerMint(amount, HelperLib.TokenType.SHORTERS);
    }

    function calculateLongSpotPrice(
        uint256 amount
    ) external view returns (uint256) {
        return
            calculateBuyReturn(
                totalSupply(uint256(HelperLib.TokenType.SHORTERS)),
                amount,
                slope
            );
    }

    function withdraw() external onlyOwner isPassed {
        payable(_owner).transfer(proposalStorage.amount);
    }

    function calculateShortSpotPrice(
        uint256 amount
    ) external view returns (uint256) {
        return
            calculateBuyReturn(
                totalSupply(uint256(HelperLib.TokenType.SHORTERS)),
                amount,
                slope
            );
    }

    function checkTenure() external isPassed {
        if (
            block.timestamp - proposalStorage.startTime >
            proposalStorage.tenure * 4 * 1 weeks
        ) {
            if (proposalStorage.emisLeft != 0) {
                winner = HelperLib.TokenType.SHORTERS;
            }
        }
    }

    function sellShort() external payable isClosed {
        uint256 amount = calculateBuyReturn(
            address(this).balance,
            balanceOf(msg.sender, uint256(HelperLib.TokenType.SHORTERS)),
            slope
        );

        innerBurn(amount, HelperLib.TokenType.SHORTERS);
    }

    function sellLong() external payable isClosed {
        uint256 amount = calculateBuyReturn(
            address(this).balance,
            balanceOf(msg.sender, uint256(HelperLib.TokenType.LONGERS)),
            slope
        );

        innerBurn(amount, HelperLib.TokenType.LONGERS);
    }

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Supply) {
        super._update(from, to, ids, values);
    }

    function _checkOwner() internal view virtual {
        if (owner() != _msgSender()) {
            revert HelperLib.OwnableUnauthorizedAccount(_msgSender());
        }
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    receive() external payable {
        if (address(this).balance >= proposalStorage.security) {
            proposalStorage.state = HelperLib.State.FUNDED;
        }
    }
}
