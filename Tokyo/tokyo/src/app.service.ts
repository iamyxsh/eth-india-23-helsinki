import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  pong(): string {
    return 'pong';
  }

  async getScore(address: string): Promise<number> {
    const res = await axios
      .get(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`,
      )
      .then((res) => res.data);

    let value = 0;

    if ((res.status = '0')) {
      return Math.floor(Math.random() * (700 - 200 + 1)) + 200;
    }

    res.result.forEach((item) => {
      value += item.value;
    });

    const minTransactionValue = 0;
    const maxTransactionValue = 100 * 10 ** 18;
    const minScore = 0;
    const maxScore = 1000;

    const clampedValue = Math.max(
      minTransactionValue,
      Math.min(value, maxTransactionValue),
    );

    const scaledScore =
      ((clampedValue - minTransactionValue) /
        (maxTransactionValue - minTransactionValue)) *
        (maxScore - minScore) +
      minScore;

    return Math.round(scaledScore);
  }
}
