import WalletProvider from '@/components/providers/wallet'
import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import 'react-toastify/dist/ReactToastify.css';

export default function App({Component, pageProps}: AppProps) {
    return (
        <WalletProvider>
            <Component {...pageProps} />

        </WalletProvider>
    )
}
