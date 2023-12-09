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
import type { NonPayableOverrides } from "../../../../common";
import type {
  BancorFormula,
  BancorFormulaInterface,
} from "../../../../contracts/Bancor/Bancor.sol/BancorFormula";

const _abi = [
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_connectorBalance",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_connectorWeight",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_depositAmount",
        type: "uint256",
      },
    ],
    name: "calculatePurchaseReturn",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_connectorBalance",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_connectorWeight",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_sellAmount",
        type: "uint256",
      },
    ],
    name: "calculateSaleReturn",
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
  {
    inputs: [],
    name: "power",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600381526020017f302e330000000000000000000000000000000000000000000000000000000000815250600090816200004a9190620002d9565b503480156200005857600080fd5b50620003c0565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620000e157607f821691505b602082108103620000f757620000f662000099565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000122565b6200016d868362000122565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620001ba620001b4620001ae8462000185565b6200018f565b62000185565b9050919050565b6000819050919050565b620001d68362000199565b620001ee620001e582620001c1565b8484546200012f565b825550505050565b600090565b62000205620001f6565b62000212818484620001cb565b505050565b5b818110156200023a576200022e600082620001fb565b60018101905062000218565b5050565b601f82111562000289576200025381620000fd565b6200025e8462000112565b810160208510156200026e578190505b620002866200027d8562000112565b83018262000217565b50505b505050565b600082821c905092915050565b6000620002ae600019846008026200028e565b1980831691505092915050565b6000620002c983836200029b565b9150826002028217905092915050565b620002e4826200005f565b67ffffffffffffffff8111156200030057620002ff6200006a565b5b6200030c8254620000c8565b620003198282856200023e565b600060209050601f8311600181146200035157600084156200033c578287015190505b620003488582620002bb565b865550620003b8565b601f1984166200036186620000fd565b60005b828110156200038b5784890151825560018201915060208501945060208101905062000364565b86831015620003ab5784890151620003a7601f8916826200029b565b8355505b6001600288020188555050505b505050505050565b612aa080620003d06000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806329a00e7c1461005157806349f9b0f7146100815780634a4d59fa146100b157806354fd4d50146100bb575b600080fd5b61006b6004803603810190610066919061265f565b6100d9565b60405161007891906126d5565b60405180910390f35b61009b6004803603810190610096919061265f565b6101d4565b6040516100a891906126d5565b60405180910390f35b6100b9610309565b005b6100c36118fa565b6040516100d09190612780565b60405180910390f35b600080851180156100ea5750600084115b80156100fc575060008363ffffffff16115b80156101175750620f424063ffffffff168363ffffffff1611155b61012057600080fd5b6000820361013157600090506101cc565b620f424063ffffffff168363ffffffff16036101635761015c8285876119889092919063ffffffff16565b90506101cc565b600080600061017b8786611a8f90919063ffffffff16565b91505061018d818888620f4240611abe565b809350819450505060006101aa848a611b2a90919063ffffffff16565b91505060008360ff1682901c905089816101c491906127d1565b955050505050505b949350505050565b600080851180156101e55750600084115b80156101f7575060008363ffffffff16115b80156102125750620f424063ffffffff168363ffffffff1611155b801561021e5750848211155b61022757600080fd5b600082036102385760009050610301565b84820361024757839050610301565b620f424063ffffffff168363ffffffff1603610279576102728286866119889092919063ffffffff16565b9050610301565b6000806000848861028a91906127d1565b905061029b8882620f424089611abe565b809350819450505060006102b88489611b2a90919063ffffffff16565b91505060008360ff1689901b905060006102db8284611b7d90919063ffffffff16565b91505060006102f38283611ba590919063ffffffff16565b915050809750505050505050505b949350505050565b706bffffffffffffffffffffffffffffffff60016000608081106103305761032f612805565b5b01819055507067ffffffffffffffffffffffffffffffff6001806080811061035b5761035a612805565b5b018190555070637fffffffffffffffffffffffffffffff600160026080811061038757610386612805565b5b0181905550705f6fffffffffffffffffffffffffffffff60016003608081106103b3576103b2612805565b5b0181905550705b77ffffffffffffffffffffffffffffff60016004608081106103df576103de612805565b5b01819055507057b3ffffffffffffffffffffffffffffff600160056080811061040b5761040a612805565b5b0181905550705419ffffffffffffffffffffffffffffff600160066080811061043757610436612805565b5b01819055507050a2ffffffffffffffffffffffffffffff600160076080811061046357610462612805565b5b0181905550704d517fffffffffffffffffffffffffffff600160086080811061048f5761048e612805565b5b0181905550704a233fffffffffffffffffffffffffffff60016009608081106104bb576104ba612805565b5b01819055507047165fffffffffffffffffffffffffffff6001600a608081106104e7576104e6612805565b5b0181905550704429afffffffffffffffffffffffffffff6001600b6080811061051357610512612805565b5b018190555070415bc7ffffffffffffffffffffffffffff6001600c6080811061053f5761053e612805565b5b0181905550703eab73ffffffffffffffffffffffffffff6001600d6080811061056b5761056a612805565b5b0181905550703c1771ffffffffffffffffffffffffffff6001600e6080811061059757610596612805565b5b018190555070399e96ffffffffffffffffffffffffffff6001600f608081106105c3576105c2612805565b5b018190555070373fc47fffffffffffffffffffffffffff60016010608081106105ef576105ee612805565b5b01819055507034f9e8ffffffffffffffffffffffffffff600160116080811061061b5761061a612805565b5b01819055507032cbfd5fffffffffffffffffffffffffff600160126080811061064757610646612805565b5b01819055507030b5057fffffffffffffffffffffffffff600160136080811061067357610672612805565b5b0181905550702eb40f9fffffffffffffffffffffffffff600160146080811061069f5761069e612805565b5b0181905550702cc8340fffffffffffffffffffffffffff60016015608081106106cb576106ca612805565b5b0181905550702af09481ffffffffffffffffffffffffff60016016608081106106f7576106f6612805565b5b018190555070292c5bddffffffffffffffffffffffffff600160176080811061072357610722612805565b5b018190555070277abdcdffffffffffffffffffffffffff600160186080811061074f5761074e612805565b5b01819055507025daf6657fffffffffffffffffffffffff600160196080811061077b5761077a612805565b5b018190555070244c49c65fffffffffffffffffffffffff6001601a608081106107a7576107a6612805565b5b01819055507022ce03cd5fffffffffffffffffffffffff6001601b608081106107d3576107d2612805565b5b018190555070215f77c047ffffffffffffffffffffffff6001601c608081106107ff576107fe612805565b5b0181905550701fffffffffffffffffffffffffffffffff6001601d6080811061082b5761082a612805565b5b0181905550701eaefdbdabffffffffffffffffffffffff6001601e6080811061085757610856612805565b5b0181905550701d6bd8b2ebffffffffffffffffffffffff6001601f6080811061088357610882612805565b5b0181905550701c35fedd14ffffffffffffffffffffffff60016020608081106108af576108ae612805565b5b0181905550701b0ce43b323fffffffffffffffffffffff60016021608081106108db576108da612805565b5b01819055507019f0028ec1ffffffffffffffffffffffff600160226080811061090757610906612805565b5b01819055507018ded91f0e7fffffffffffffffffffffff600160236080811061093357610932612805565b5b01819055507017d8ec7f0417ffffffffffffffffffffff600160246080811061095f5761095e612805565b5b01819055507016ddc6556cdbffffffffffffffffffffff600160256080811061098b5761098a612805565b5b01819055507015ecf52776a1ffffffffffffffffffffff60016026608081106109b7576109b6612805565b5b01819055507015060c256cb2ffffffffffffffffffffff60016027608081106109e3576109e2612805565b5b0181905550701428a2f98d72ffffffffffffffffffffff6001602860808110610a0f57610a0e612805565b5b01819055507013545598e5c23fffffffffffffffffffff6001602960808110610a3b57610a3a612805565b5b0181905550701288c4161ce1dfffffffffffffffffffff6001602a60808110610a6757610a66612805565b5b01819055507011c592761c666fffffffffffffffffffff6001602b60808110610a9357610a92612805565b5b018190555070110a688680a757ffffffffffffffffffff6001602c60808110610abf57610abe612805565b5b0181905550701056f1b5bedf77ffffffffffffffffffff6001602d60808110610aeb57610aea612805565b5b0181905550700faadceceeff8bffffffffffffffffffff6001602e60808110610b1757610b16612805565b5b0181905550700f05dc6b27edadffffffffffffffffffff6001602f60808110610b4357610b42612805565b5b0181905550700e67a5a25da4107fffffffffffffffffff6001603060808110610b6f57610b6e612805565b5b0181905550700dcff115b14eedffffffffffffffffffff6001603160808110610b9b57610b9a612805565b5b0181905550700d3e7a392431239fffffffffffffffffff6001603260808110610bc757610bc6612805565b5b0181905550700cb2ff529eb71e4fffffffffffffffffff6001603360808110610bf357610bf2612805565b5b0181905550700c2d415c3db974afffffffffffffffffff6001603460808110610c1f57610c1e612805565b5b0181905550700bad03e7d883f69bffffffffffffffffff6001603560808110610c4b57610c4a612805565b5b0181905550700b320d03b2c343d5ffffffffffffffffff6001603660808110610c7757610c76612805565b5b0181905550700abc25204e02828dffffffffffffffffff6001603760808110610ca357610ca2612805565b5b0181905550700a4b16f74ee4bb207fffffffffffffffff6001603860808110610ccf57610cce612805565b5b01819055507009deaf736ac1f569ffffffffffffffffff6001603960808110610cfb57610cfa612805565b5b0181905550700976bd9952c7aa957fffffffffffffffff6001603a60808110610d2757610d26612805565b5b01819055507009131271922eaa606fffffffffffffffff6001603b60808110610d5357610d52612805565b5b01819055507008b380f3558668c46fffffffffffffffff6001603c60808110610d7f57610d7e612805565b5b0181905550700857ddf0117efa215bffffffffffffffff6001603d60808110610dab57610daa612805565b5b01819055507007ffffffffffffffffffffffffffffffff6001603e60808110610dd757610dd6612805565b5b01819055507007abbf6f6abb9d087fffffffffffffffff6001603f60808110610e0357610e02612805565b5b018190555070075af62cbac95f7dfa7fffffffffffffff6001604060808110610e2f57610e2e612805565b5b018190555070070d7fb7452e187ac13fffffffffffffff6001604160808110610e5b57610e5a612805565b5b01819055507006c3390ecc8af379295fffffffffffffff6001604260808110610e8757610e86612805565b5b018190555070067c00a3b07ffc01fd6fffffffffffffff6001604360808110610eb357610eb2612805565b5b0181905550700637b647c39cbb9d3d27ffffffffffffff6001604460808110610edf57610ede612805565b5b01819055507005f63b1fc104dbd39587ffffffffffffff6001604560808110610f0b57610f0a612805565b5b01819055507005b771955b36e12f7235ffffffffffffff6001604660808110610f3757610f36612805565b5b018190555070057b3d49dda84556d6f6ffffffffffffff6001604760808110610f6357610f62612805565b5b018190555070054183095b2c8ececf30ffffffffffffff6001604860808110610f8f57610f8e612805565b5b018190555070050a28be635ca2b888f77fffffffffffff6001604960808110610fbb57610fba612805565b5b01819055507004d5156639708c9db33c3fffffffffffff6001604a60808110610fe757610fe6612805565b5b01819055507004a23105873875bd52dfdfffffffffffff6001604b6080811061101357611012612805565b5b0181905550700471649d87199aa990756fffffffffffff6001604c6080811061103f5761103e612805565b5b01819055507004429a21a029d4c1457cfbffffffffffff6001604d6080811061106b5761106a612805565b5b0181905550700415bc6d6fb7dd71af2cb3ffffffffffff6001604e6080811061109757611096612805565b5b01819055507003eab73b3bbfe282243ce1ffffffffffff6001604f608081106110c3576110c2612805565b5b01819055507003c1771ac9fb6b4c18e229ffffffffffff60016050608081106110ef576110ee612805565b5b0181905550700399e96897690418f785257fffffffffff600160516080811061111b5761111a612805565b5b0181905550700373fc456c53bb779bf0ea9fffffffffff600160526080811061114757611146612805565b5b018190555070034f9e8e490c48e67e6ab8bfffffffffff600160536080811061117357611172612805565b5b018190555070032cbfd4a7adc790560b3337ffffffffff600160546080811061119f5761119e612805565b5b018190555070030b50570f6e5d2acca94613ffffffffff60016055608081106111cb576111ca612805565b5b01819055507002eb40f9f620fda6b56c2861ffffffffff60016056608081106111f7576111f6612805565b5b01819055507002cc8340ecb0d0f520a6af58ffffffffff600160576080811061122357611222612805565b5b01819055507002af09481380a0a35cf1ba02ffffffffff600160586080811061124f5761124e612805565b5b0181905550700292c5bdd3b92ec810287b1b3fffffffff600160596080811061127b5761127a612805565b5b0181905550700277abdcdab07d5a77ac6d6b9fffffffff6001605a608081106112a7576112a6612805565b5b018190555070025daf6654b1eaa55fd64df5efffffffff6001605b608081106112d3576112d2612805565b5b0181905550700244c49c648baa98192dce88b7ffffffff6001605c608081106112ff576112fe612805565b5b018190555070022ce03cd5619a311b2471268bffffffff6001605d6080811061132b5761132a612805565b5b0181905550700215f77c045fbe885654a44a0fffffffff6001605e6080811061135757611356612805565b5b01819055507001ffffffffffffffffffffffffffffffff6001605f6080811061138357611382612805565b5b01819055507001eaefdbdaaee7421fc4d3ede5ffffffff60016060608081106113af576113ae612805565b5b01819055507001d6bd8b2eb257df7e8ca57b09bfffffff60016061608081106113db576113da612805565b5b01819055507001c35fedd14b861eb0443f7f133fffffff600160626080811061140757611406612805565b5b01819055507001b0ce43b322bcde4a56e8ada5afffffff600160636080811061143357611432612805565b5b018190555070019f0028ec1fff007f5a195a39dfffffff600160646080811061145f5761145e612805565b5b018190555070018ded91f0e72ee74f49b15ba527ffffff600160656080811061148b5761148a612805565b5b018190555070017d8ec7f04136f4e5615fd41a63ffffff60016066608081106114b7576114b6612805565b5b018190555070016ddc6556cdb84bdc8d12d22e6fffffff60016067608081106114e3576114e2612805565b5b018190555070015ecf52776a1155b5bd8395814f7fffff600160686080811061150f5761150e612805565b5b018190555070015060c256cb23b3b3cc3754cf40ffffff600160696080811061153b5761153a612805565b5b01819055507001428a2f98d728ae223ddab715be3fffff6001606a6080811061156757611566612805565b5b018190555070013545598e5c23276ccf0ede68034fffff6001606b6080811061159357611592612805565b5b01819055507001288c4161ce1d6f54b7f61081194fffff6001606c608081106115bf576115be612805565b5b018190555070011c592761c666aa641d5a01a40f17ffff6001606d608081106115eb576115ea612805565b5b0181905550700110a688680a7530515f3e6e6cfdcdffff6001606e6080811061161757611616612805565b5b01819055507001056f1b5bedf75c6bcb2ce8aed428ffff6001606f6080811061164357611642612805565b5b01819055506ffaadceceeff8a0890f3875f008277fff600160706080811061166e5761166d612805565b5b01819055506ff05dc6b27edad306388a600f6ba0bfff600160716080811061169957611698612805565b5b01819055506fe67a5a25da41063de1495d5b18cdbfff60016072608081106116c4576116c3612805565b5b01819055506fdcff115b14eedde6fc3aa5353f2e4fff60016073608081106116ef576116ee612805565b5b01819055506fd3e7a3924312399f9aae2e0f868f8fff600160746080811061171a57611719612805565b5b01819055506fcb2ff529eb71e41582cccd5a1ee26fff600160756080811061174557611744612805565b5b01819055506fc2d415c3db974ab32a51840c0b67edff60016076608081106117705761176f612805565b5b01819055506fbad03e7d883f69ad5b0a186184e06bff600160776080811061179b5761179a612805565b5b01819055506fb320d03b2c343d4829abd6075f0cc5ff60016078608081106117c6576117c5612805565b5b01819055506fabc25204e02828d73c6e80bcdb1a95bf60016079608081106117f1576117f0612805565b5b01819055506fa4b16f74ee4bb2040a1ec6c15fbbf2df6001607a6080811061181c5761181b612805565b5b01819055506f9deaf736ac1f569deb1b5ae3f36c130f6001607b6080811061184757611846612805565b5b01819055506f976bd9952c7aa957f5937d790ef650376001607c6080811061187257611871612805565b5b01819055506f9131271922eaa6064b73a22d0bd4f2bf6001607d6080811061189d5761189c612805565b5b01819055506f8b380f3558668c46c91c49a2f8e967b96001607e608081106118c8576118c7612805565b5b01819055506f857ddf0117efa215952912839f6473e66001607f608081106118f3576118f2612805565b5b0181905550565b6000805461190790612863565b80601f016020809104026020016040519081016040528092919081815260200182805461193390612863565b80156119805780601f1061195557610100808354040283529160200191611980565b820191906000526020600020905b81548152906001019060200180831161196357829003601f168201915b505050505081565b60008083850290506000801985870982811083820303915050600081036119c3578382816119b9576119b8612894565b5b0492505050611a88565b8084116119fc576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084868809905082811182039150808303925060008560000386169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b6000806000838501905084811015611aae576000809250925050611ab7565b60018192509250505b9250929050565b60008060008363ffffffff168563ffffffff16611adb8989611bdb565b611ae591906128c3565b611aef9190612905565b90506000611afc82611d6c565b9050611b1a81607f611b0e9190612943565b60ff1683901c82611e4e565b8193509350505094509492505050565b60008060008403611b42576001600091509150611b76565b6000838502905083858281611b5a57611b59612894565b5b0414611b6d576000809250925050611b76565b60018192509250505b9250929050565b60008083831115611b945760008091509150611b9e565b6001838503915091505b9250929050565b60008060008303611bbc5760008091509150611bd4565b6001838581611bce57611bcd612894565b5b04915091505b9250929050565b60007001ffffffffffffffffffffffffffffffff831115611bff57611bfe612978565b5b600080836f8000000000000000000000000000000086611c1f91906128c3565b611c299190612905565b90507001000000000000000000000000000000008110611c97576000611c696f8000000000000000000000000000000083611c649190612905565b61255d565b90508060ff1682901c91506f800000000000000000000000000000008160ff16611c9391906128c3565b9250505b6f80000000000000000000000000000000811115611d3f576000607f90505b60008160ff161115611d3d576f800000000000000000000000000000008283611cdf91906128c3565b611ce99190612905565b91507001000000000000000000000000000000008210611d2c57600182901c9150600181611d179190612943565b60ff166001901b83611d2991906129a7565b92505b80611d36906129db565b9050611cb6565b505b607a60ff166f02c5c85fdf473de6af278ece600fcbda83611d6091906128c3565b901c9250505092915050565b600080602090506000607f90505b8060ff16600183611d8b9190612a04565b60ff161015611de157600060028284611da49190612a04565b611dae9190612a39565b90508460018260ff1660808110611dc857611dc7612805565b5b015410611dd757809250611ddb565b8091505b50611d7a565b8360018260ff1660808110611df957611df8612805565b5b015410611e0a578092505050611e49565b8360018360ff1660808110611e2257611e21612805565b5b015410611e33578192505050611e49565b6000611e4257611e41612978565b5b6000925050505b919050565b60008083905060008360ff168583611e6691906128c3565b901c91506f03442c4e6074a82f1797f72ac000000082611e8691906128c3565b81611e9191906129a7565b90508360ff168583611ea391906128c3565b901c91506f0116b96f757c380fb287fd0e4000000082611ec391906128c3565b81611ece91906129a7565b90508360ff168583611ee091906128c3565b901c91506e45ae5bdd5f0e03eca1ff439000000082611eff91906128c3565b81611f0a91906129a7565b90508360ff168583611f1c91906128c3565b901c91506e0defabf91302cd95b9ffda5000000082611f3b91906128c3565b81611f4691906129a7565b90508360ff168583611f5891906128c3565b901c91506e02529ca9832b22439efff9b800000082611f7791906128c3565b81611f8291906129a7565b90508360ff168583611f9491906128c3565b901c91506d54f1cf12bd04e516b6da8800000082611fb291906128c3565b81611fbd91906129a7565b90508360ff168583611fcf91906128c3565b901c91506d0a9e39e257a09ca2d6db5100000082611fed91906128c3565b81611ff891906129a7565b90508360ff16858361200a91906128c3565b901c91506d012e066e7b839fa050c3090000008261202891906128c3565b8161203391906129a7565b90508360ff16858361204591906128c3565b901c91506c1e33d7d926c329a1ad1a8000008261206291906128c3565b8161206d91906129a7565b90508360ff16858361207f91906128c3565b901c91506c02bee513bdb4a6b19b5f8000008261209c91906128c3565b816120a791906129a7565b90508360ff1685836120b991906128c3565b901c91506b3a9316fa79b88eccf2a00000826120d591906128c3565b816120e091906129a7565b90508360ff1685836120f291906128c3565b901c91506b048177ebe1fa8123752000008261210e91906128c3565b8161211991906129a7565b90508360ff16858361212b91906128c3565b901c91506a5263fe90242dcbacf000008261214691906128c3565b8161215191906129a7565b90508360ff16858361216391906128c3565b901c91506a057e22099c030d941000008261217e91906128c3565b8161218991906129a7565b90508360ff16858361219b91906128c3565b901c91506957e22099c030d9410000826121b591906128c3565b816121c091906129a7565b90508360ff1685836121d291906128c3565b901c915069052b6b54569976310000826121ec91906128c3565b816121f791906129a7565b90508360ff16858361220991906128c3565b901c9150684985f67696bf7480008261222291906128c3565b8161222d91906129a7565b90508360ff16858361223f91906128c3565b901c91506803dea12ea99e4980008261225891906128c3565b8161226391906129a7565b90508360ff16858361227591906128c3565b901c91506731880f2214b6e0008261228d91906128c3565b8161229891906129a7565b90508360ff1685836122aa91906128c3565b901c915067025bcff56eb36000826122c291906128c3565b816122cd91906129a7565b90508360ff1685836122df91906128c3565b901c9150661b722e10ab1000826122f691906128c3565b8161230191906129a7565b90508360ff16858361231391906128c3565b901c91506601317c700770008261232a91906128c3565b8161233591906129a7565b90508360ff16858361234791906128c3565b901c9150650cba84aafa008261235d91906128c3565b8161236891906129a7565b90508360ff16858361237a91906128c3565b901c91506482573a0a008261238f91906128c3565b8161239a91906129a7565b90508360ff1685836123ac91906128c3565b901c91506405035ad900826123c191906128c3565b816123cc91906129a7565b90508360ff1685836123de91906128c3565b901c9150632f881b00826123f291906128c3565b816123fd91906129a7565b90508360ff16858361240f91906128c3565b901c91506301b293408261242391906128c3565b8161242e91906129a7565b90508360ff16858361244091906128c3565b901c9150620efc408261245391906128c3565b8161245e91906129a7565b90508360ff16858361247091906128c3565b901c9150617fe08261248291906128c3565b8161248d91906129a7565b90508360ff16858361249f91906128c3565b901c9150610420826124b191906128c3565b816124bc91906129a7565b90508360ff1685836124ce91906128c3565b901c91506021826124df91906128c3565b816124ea91906129a7565b90508360ff1685836124fc91906128c3565b901c915060018261250d91906128c3565b8161251891906129a7565b90508360ff166001901b856f0688589cc0e9505e2f2fee55800000008361253f9190612905565b61254991906129a7565b61255391906129a7565b9250505092915050565b60008060009050600083905061010081101561259d575b600181111561259857600181901c90506001826125919190612a04565b9150612574565b6125de565b6000608090505b60008160ff1611156125dc578060ff166001901b82106125cd578060ff1682901c915080831792505b60018160ff16901c90506125a4565b505b8192505050919050565b600080fd5b6000819050919050565b612600816125ed565b811461260b57600080fd5b50565b60008135905061261d816125f7565b92915050565b600063ffffffff82169050919050565b61263c81612623565b811461264757600080fd5b50565b60008135905061265981612633565b92915050565b60008060008060808587031215612679576126786125e8565b5b60006126878782880161260e565b94505060206126988782880161260e565b93505060406126a98782880161264a565b92505060606126ba8782880161260e565b91505092959194509250565b6126cf816125ed565b82525050565b60006020820190506126ea60008301846126c6565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561272a57808201518184015260208101905061270f565b60008484015250505050565b6000601f19601f8301169050919050565b6000612752826126f0565b61275c81856126fb565b935061276c81856020860161270c565b61277581612736565b840191505092915050565b6000602082019050818103600083015261279a8184612747565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006127dc826125ed565b91506127e7836125ed565b92508282039050818111156127ff576127fe6127a2565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061287b57607f821691505b60208210810361288e5761288d612834565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006128ce826125ed565b91506128d9836125ed565b92508282026128e7816125ed565b915082820484148315176128fe576128fd6127a2565b5b5092915050565b6000612910826125ed565b915061291b836125ed565b92508261292b5761292a612894565b5b828204905092915050565b600060ff82169050919050565b600061294e82612936565b915061295983612936565b9250828203905060ff811115612972576129716127a2565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60006129b2826125ed565b91506129bd836125ed565b92508282019050808211156129d5576129d46127a2565b5b92915050565b60006129e682612936565b9150600082036129f9576129f86127a2565b5b600182039050919050565b6000612a0f82612936565b9150612a1a83612936565b9250828201905060ff811115612a3357612a326127a2565b5b92915050565b6000612a4482612936565b9150612a4f83612936565b925082612a5f57612a5e612894565b5b82820490509291505056fea2646970667358221220b51c7c920808c6521f87ffa92098221ebccaa305fc0a68fe352b08c788f13be264736f6c63430008150033";

type BancorFormulaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BancorFormulaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BancorFormula__factory extends ContractFactory {
  constructor(...args: BancorFormulaConstructorParams) {
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
      BancorFormula & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BancorFormula__factory {
    return super.connect(runner) as BancorFormula__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BancorFormulaInterface {
    return new Interface(_abi) as BancorFormulaInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BancorFormula {
    return new Contract(address, _abi, runner) as unknown as BancorFormula;
  }
}