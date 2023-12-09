// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract BondingCurve {
    using Math for uint256;

    function calculateBuyReturn(
        uint256 totalSupply,
        uint256 depositAmount,
        uint32 slope
    ) public pure returns (uint256) {
        uint256 price = calculatePrice(totalSupply, slope);
        return depositAmount / price;
    }

    function calculatePrice(
        uint256 totalSupply,
        uint32 slope
    ) public pure returns (uint256) {
        return slope * totalSupply;
    }
}
