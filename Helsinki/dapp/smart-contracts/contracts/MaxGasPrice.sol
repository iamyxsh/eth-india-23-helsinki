// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract MaxGasPrice {
    uint256 public maxGasPrice = 1 * 10 ** 18;

    modifier validGasPrice() {
        require(
            tx.gasprice <= maxGasPrice,
            "Must send equal to or lower than maximum gas price to mitigate front running attacks."
        );
        _;
    }
}
