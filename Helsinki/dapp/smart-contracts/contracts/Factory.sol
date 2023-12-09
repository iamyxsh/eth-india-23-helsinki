// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IHelsinki} from "./Helsinki.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract HelsinkiFactory is Ownable {
    mapping(address => address) private proposals;
    address public helsinkiAddress;

    constructor(address _helsinkiAddress) Ownable(msg.sender) {
        helsinkiAddress = _helsinkiAddress;
    }

    function createProposal(
        uint256 amount,
        uint256 security,
        uint8 tenure,
        address safeAddress,
        uint256 reserve
    ) external {
        address clone = createClone(helsinkiAddress);
        IHelsinki helsiki = IHelsinki(clone);
        helsiki.init(amount, security, tenure, safeAddress, reserve);
        proposals[safeAddress] = address(clone);
    }

    function setBetAddress(address _address) external onlyOwner {
        helsinkiAddress = _address;
    }

    function createClone(address target) internal returns (address result) {
        bytes20 targetBytes = bytes20(target);
        assembly {
            let clone := mload(0x40)
            mstore(
                clone,
                0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000
            )
            mstore(add(clone, 0x14), targetBytes)
            mstore(
                add(clone, 0x28),
                0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000
            )
            result := create(0, clone, 0x37)
        }
    }
}
