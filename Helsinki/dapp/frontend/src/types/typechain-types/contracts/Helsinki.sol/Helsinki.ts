/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface HelsinkiInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_owner"
      | "balanceOf"
      | "balanceOfBatch"
      | "burn"
      | "burnBatch"
      | "buyLong"
      | "buyShort"
      | "calculateBuyReturn"
      | "calculateLongSpotPrice"
      | "calculatePrice"
      | "calculateShortSpotPrice"
      | "checkTenure"
      | "exists"
      | "foreclose"
      | "init"
      | "isApprovedForAll"
      | "owner"
      | "payEmi"
      | "poolBalance"
      | "proposalStorage"
      | "safeBatchTransferFrom"
      | "safeTransferFrom"
      | "scale"
      | "sellLong"
      | "sellShort"
      | "setApprovalForAll"
      | "slope"
      | "supportsInterface"
      | "totalSupply()"
      | "totalSupply(uint256)"
      | "uri"
      | "winner"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ApprovalForAll"
      | "TransferBatch"
      | "TransferSingle"
      | "URI"
  ): EventFragment;

  encodeFunctionData(functionFragment: "_owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBatch",
    values: [AddressLike, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "buyLong", values?: undefined): string;
  encodeFunctionData(functionFragment: "buyShort", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateBuyReturn",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateLongSpotPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateShortSpotPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTenure",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "foreclose", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payEmi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalStorage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "scale", values?: undefined): string;
  encodeFunctionData(functionFragment: "sellLong", values?: undefined): string;
  encodeFunctionData(functionFragment: "sellShort", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "slope", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "winner", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "_owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyLong", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyShort", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateBuyReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateLongSpotPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateShortSpotPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTenure",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "foreclose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payEmi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "scale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sellLong", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sellShort", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slope", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    account: AddressLike,
    operator: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    account: string,
    operator: string,
    approved: boolean
  ];
  export interface OutputObject {
    account: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferBatchEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    ids: BigNumberish[],
    values: BigNumberish[]
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    ids: bigint[],
    values: bigint[]
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    ids: bigint[];
    values: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferSingleEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    id: BigNumberish,
    value: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    id: bigint,
    value: bigint
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    id: bigint;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace URIEvent {
  export type InputTuple = [value: string, id: BigNumberish];
  export type OutputTuple = [value: string, id: bigint];
  export interface OutputObject {
    value: string;
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Helsinki extends BaseContract {
  connect(runner?: ContractRunner | null): Helsinki;
  waitForDeployment(): Promise<this>;

  interface: HelsinkiInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  _owner: TypedContractMethod<[], [string], "view">;

  balanceOf: TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;

  balanceOfBatch: TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  burn: TypedContractMethod<
    [account: AddressLike, id: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  burnBatch: TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[], values: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  buyLong: TypedContractMethod<[], [void], "payable">;

  buyShort: TypedContractMethod<[], [void], "payable">;

  calculateBuyReturn: TypedContractMethod<
    [
      totalSupply: BigNumberish,
      depositAmount: BigNumberish,
      slope: BigNumberish
    ],
    [bigint],
    "view"
  >;

  calculateLongSpotPrice: TypedContractMethod<
    [amount: BigNumberish],
    [bigint],
    "view"
  >;

  calculatePrice: TypedContractMethod<
    [totalSupply: BigNumberish, slope: BigNumberish],
    [bigint],
    "view"
  >;

  calculateShortSpotPrice: TypedContractMethod<
    [amount: BigNumberish],
    [bigint],
    "view"
  >;

  checkTenure: TypedContractMethod<[], [void], "nonpayable">;

  exists: TypedContractMethod<[id: BigNumberish], [boolean], "view">;

  foreclose: TypedContractMethod<[], [void], "payable">;

  init: TypedContractMethod<
    [
      amount: BigNumberish,
      security: BigNumberish,
      tenure: BigNumberish,
      walletAddress: AddressLike,
      _slope: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  isApprovedForAll: TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  payEmi: TypedContractMethod<[], [void], "payable">;

  poolBalance: TypedContractMethod<[], [bigint], "view">;

  proposalStorage: TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        bigint
      ] & {
        amount: bigint;
        security: bigint;
        longerPool: bigint;
        shorterPool: bigint;
        amountPaid: bigint;
        emiAmount: bigint;
        startTime: bigint;
        emisLeft: bigint;
        interest: bigint;
        tenure: bigint;
        walletAddress: string;
        state: bigint;
      }
    ],
    "view"
  >;

  safeBatchTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeTransferFrom: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  scale: TypedContractMethod<[], [bigint], "view">;

  sellLong: TypedContractMethod<[], [void], "payable">;

  sellShort: TypedContractMethod<[], [void], "payable">;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  slope: TypedContractMethod<[], [bigint], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  "totalSupply()": TypedContractMethod<[], [bigint], "view">;

  "totalSupply(uint256)": TypedContractMethod<
    [id: BigNumberish],
    [bigint],
    "view"
  >;

  uri: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  winner: TypedContractMethod<[], [bigint], "view">;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOfBatch"
  ): TypedContractMethod<
    [accounts: AddressLike[], ids: BigNumberish[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [account: AddressLike, id: BigNumberish, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnBatch"
  ): TypedContractMethod<
    [account: AddressLike, ids: BigNumberish[], values: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyLong"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "buyShort"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "calculateBuyReturn"
  ): TypedContractMethod<
    [
      totalSupply: BigNumberish,
      depositAmount: BigNumberish,
      slope: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateLongSpotPrice"
  ): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculatePrice"
  ): TypedContractMethod<
    [totalSupply: BigNumberish, slope: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateShortSpotPrice"
  ): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "checkTenure"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "exists"
  ): TypedContractMethod<[id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "foreclose"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<
    [
      amount: BigNumberish,
      security: BigNumberish,
      tenure: BigNumberish,
      walletAddress: AddressLike,
      _slope: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isApprovedForAll"
  ): TypedContractMethod<
    [account: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "payEmi"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "poolBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalStorage"
  ): TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        bigint
      ] & {
        amount: bigint;
        security: bigint;
        longerPool: bigint;
        shorterPool: bigint;
        amountPaid: bigint;
        emiAmount: bigint;
        startTime: bigint;
        emisLeft: bigint;
        interest: bigint;
        tenure: bigint;
        walletAddress: string;
        state: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "safeBatchTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "scale"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sellLong"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "sellShort"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "setApprovalForAll"
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "slope"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "totalSupply()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply(uint256)"
  ): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "uri"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "winner"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ApprovalForAll"
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "TransferBatch"
  ): TypedContractEvent<
    TransferBatchEvent.InputTuple,
    TransferBatchEvent.OutputTuple,
    TransferBatchEvent.OutputObject
  >;
  getEvent(
    key: "TransferSingle"
  ): TypedContractEvent<
    TransferSingleEvent.InputTuple,
    TransferSingleEvent.OutputTuple,
    TransferSingleEvent.OutputObject
  >;
  getEvent(
    key: "URI"
  ): TypedContractEvent<
    URIEvent.InputTuple,
    URIEvent.OutputTuple,
    URIEvent.OutputObject
  >;

  filters: {
    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "TransferBatch(address,address,address,uint256[],uint256[])": TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;
    TransferBatch: TypedContractEvent<
      TransferBatchEvent.InputTuple,
      TransferBatchEvent.OutputTuple,
      TransferBatchEvent.OutputObject
    >;

    "TransferSingle(address,address,address,uint256,uint256)": TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;
    TransferSingle: TypedContractEvent<
      TransferSingleEvent.InputTuple,
      TransferSingleEvent.OutputTuple,
      TransferSingleEvent.OutputObject
    >;

    "URI(string,uint256)": TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
    URI: TypedContractEvent<
      URIEvent.InputTuple,
      URIEvent.OutputTuple,
      URIEvent.OutputObject
    >;
  };
}
