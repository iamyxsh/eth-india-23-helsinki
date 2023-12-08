import {createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi/react'
import React, {useState} from 'react'
import {WagmiConfig} from 'wagmi'
import {supportedChains} from './chains'
import {SafeAuthPack,} from '@safe-global/auth-kit'

// Config for WC v3
const metadata = {
    name: 'Helsinki',
    description: 'An under-collateralized lending protocol.',
    url: 'https://127.0.0.1',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const wagmiConfig = defaultWagmiConfig({
    chains: supportedChains,
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    metadata
})
createWeb3Modal({
    wagmiConfig,
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    chains: supportedChains
})

interface IWalletProvider {
    children: React.ReactNode;
}


export default function WalletProvider({children}: IWalletProvider) {
    const [safeAuth, setSafeAuth] = useState<SafeAuthPack | undefined>(undefined)
    return (
        <WagmiConfig config={wagmiConfig}>
            {children}
        </WagmiConfig>
    )
}
