/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MaxGasPrice,
  MaxGasPriceInterface,
} from "../../contracts/MaxGasPrice";

const _abi = [
  {
    inputs: [],
    name: "maxGasPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052670de0b6b3a764000060005534801561001c57600080fd5b5060b38061002b6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633de39c1114602d575b600080fd5b60336047565b604051603e91906064565b60405180910390f35b60005481565b6000819050919050565b605e81604d565b82525050565b6000602082019050607760008301846057565b9291505056fea2646970667358221220e1adb096e966184d7202da99ca269c0b6010bbcc116dcf3ae5db9b2d0a7ccb8e64736f6c63430008150033";

type MaxGasPriceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaxGasPriceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaxGasPrice__factory extends ContractFactory {
  constructor(...args: MaxGasPriceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MaxGasPrice & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MaxGasPrice__factory {
    return super.connect(runner) as MaxGasPrice__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaxGasPriceInterface {
    return new Interface(_abi) as MaxGasPriceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MaxGasPrice {
    return new Contract(address, _abi, runner) as unknown as MaxGasPrice;
  }
}
