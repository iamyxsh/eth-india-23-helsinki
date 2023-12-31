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
  BondingCurve,
  BondingCurveInterface,
} from "../../contracts/BondingCurve";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "slope",
        type: "uint32",
      },
    ],
    name: "calculateBuyReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "slope",
        type: "uint32",
      },
    ],
    name: "calculatePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610317806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806324ae021c1461003b578063c41394411461006b575b600080fd5b61005560048036038101906100509190610153565b61009b565b60405161006291906101b5565b60405180910390f35b610085600480360381019061008091906101d0565b6100c0565b60405161009291906101b5565b60405180910390f35b6000806100a885846100c0565b905080846100b6919061026e565b9150509392505050565b6000828263ffffffff166100d4919061029f565b905092915050565b600080fd5b6000819050919050565b6100f4816100e1565b81146100ff57600080fd5b50565b600081359050610111816100eb565b92915050565b600063ffffffff82169050919050565b61013081610117565b811461013b57600080fd5b50565b60008135905061014d81610127565b92915050565b60008060006060848603121561016c5761016b6100dc565b5b600061017a86828701610102565b935050602061018b86828701610102565b925050604061019c8682870161013e565b9150509250925092565b6101af816100e1565b82525050565b60006020820190506101ca60008301846101a6565b92915050565b600080604083850312156101e7576101e66100dc565b5b60006101f585828601610102565b92505060206102068582860161013e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610279826100e1565b9150610284836100e1565b92508261029457610293610210565b5b828204905092915050565b60006102aa826100e1565b91506102b5836100e1565b92508282026102c3816100e1565b915082820484148315176102da576102d961023f565b5b509291505056fea26469706673582212201648a05ff1ad1abca65fd92a111b619b6f15694af4b961dc2a5967a09b45edb464736f6c63430008150033";

type BondingCurveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BondingCurveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BondingCurve__factory extends ContractFactory {
  constructor(...args: BondingCurveConstructorParams) {
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
      BondingCurve & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BondingCurve__factory {
    return super.connect(runner) as BondingCurve__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BondingCurveInterface {
    return new Interface(_abi) as BondingCurveInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BondingCurve {
    return new Contract(address, _abi, runner) as unknown as BondingCurve;
  }
}
