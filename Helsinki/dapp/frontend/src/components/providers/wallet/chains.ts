import {goerli, mainnet, polygon, polygonMumbai, polygonZkEvm, polygonZkEvmTestnet} from 'wagmi/chains';
import {Chain} from 'wagmi';

const hardhat: Chain = {
    id: 31337,
    name: 'Hardhat',
    network: 'localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        public: {http: ['http://127.0.0.1:8545']},
        default: {http: ['http://127.0.0.1:8545']},
    },
    /*blockExplorers: {
        etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
        default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    },*/
}

const mumbai: Chain = {
    id: 80001,
    name: 'Polygon Mumbai',
    network: 'mumbai',
    nativeCurrency: {
        decimals: 18,
        name: 'Matic',
        symbol: 'MAT',
    },
    rpcUrls: {
        public: {http: ['https://polygon-testnet.public.blastapi.io']},
        default: {http: ['https://polygon-testnet.public.blastapi.io']},
    },
    /*blockExplorers: {
        etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
        default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    },*/
}

export const supportedChains = [
    hardhat,
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    polygonZkEvm,
    polygonZkEvmTestnet,
    mumbai
]
