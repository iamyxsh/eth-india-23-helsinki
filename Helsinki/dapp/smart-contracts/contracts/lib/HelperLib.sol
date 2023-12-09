// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

library HelperLib {
    enum State {
        CREATED,
        FUNDED,
        PASSED,
        CLOSED
    }

    enum TokenType {
        LONGERS,
        SHORTERS
    }

    struct Storage {
        uint256 amount;
        uint256 security;
        uint256 longerPool;
        uint256 shorterPool;
        uint256 amountPaid;
        uint256 emiAmount;
        uint256 startTime;
        uint8 emisLeft;
        uint8 interest;
        uint8 tenure;
        address safeAddress;
        State state;
    }

    error NotFunded();
    error NotPassed();
    error NotClosed();
    error LongerDidNotWin();
    error ShorterDidNotWin();

    error OwnableUnauthorizedAccount(address account);
}
