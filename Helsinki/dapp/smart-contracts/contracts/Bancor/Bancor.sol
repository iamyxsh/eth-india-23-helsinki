// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/utils/math/Math.sol";
import "./Power.sol";

contract BancorFormula is Power {
    using Math for uint256;

    uint32 private constant MAX_WEIGHT = 1000000;

    function calculatePurchaseReturn(
        uint256 _supply,
        uint256 _connectorBalance,
        uint32 _connectorWeight,
        uint256 _depositAmount
    ) public view returns (uint256) {
        require(
            _supply > 0 &&
                _connectorBalance > 0 &&
                _connectorWeight > 0 &&
                _connectorWeight <= MAX_WEIGHT
        );

        if (_depositAmount == 0) {
            return 0;
        }

        if (_connectorWeight == MAX_WEIGHT) {
            return _supply.mulDiv(_depositAmount, _connectorBalance);
        }

        uint256 result;
        uint8 precision;
        (, uint256 baseN) = _depositAmount.tryAdd(_connectorBalance);
        (result, precision) = power(
            baseN,
            _connectorBalance,
            _connectorWeight,
            MAX_WEIGHT
        );
        (, uint256 res) = _supply.tryMul(result);
        uint256 temp = res >> precision;
        return temp - _supply;
    }

    function calculateSaleReturn(
        uint256 _supply,
        uint256 _connectorBalance,
        uint32 _connectorWeight,
        uint256 _sellAmount
    ) public view returns (uint256) {
        require(
            _supply > 0 &&
                _connectorBalance > 0 &&
                _connectorWeight > 0 &&
                _connectorWeight <= MAX_WEIGHT &&
                _sellAmount <= _supply
        );

        if (_sellAmount == 0) {
            return 0;
        }

        if (_sellAmount == _supply) {
            return _connectorBalance;
        }

        if (_connectorWeight == MAX_WEIGHT) {
            return _connectorBalance.mulDiv(_sellAmount, _supply);
        }

        uint256 result;
        uint8 precision;
        uint256 baseD = _supply - _sellAmount;
        (result, precision) = power(
            _supply,
            baseD,
            MAX_WEIGHT,
            _connectorWeight
        );
        (, uint256 oldBalance) = _connectorBalance.tryMul(result);
        uint256 newBalance = _connectorBalance << precision;
        (, uint256 res) = oldBalance.trySub(newBalance);
        (, uint256 _res) = res.tryDiv(res);
        return _res;
    }
}
