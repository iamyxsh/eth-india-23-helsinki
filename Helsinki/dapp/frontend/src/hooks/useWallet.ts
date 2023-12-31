import {useWeb3Modal, useWeb3ModalState} from "@web3modal/wagmi/react";
import {ethers} from "ethers";
import {useEffect, useState} from "react";
import {useAccount, useDisconnect, useNetwork, useSwitchNetwork} from "wagmi";
import {NameService} from "@/services/name";

/**
 * @description Useful methods and data about Wallet
 */
export const useWallet = () => {
    const {open: showConnectDialog, close: closeConnectDialog} = useWeb3Modal();
    const {open: isConnectDialogOpen} = useWeb3ModalState();
    const {address: walletAddress, status: walletConnectionStatus, connector} = useAccount();
    const {disconnect: disconnectWallet} = useDisconnect();
    const {chain: chainCurrent} = useNetwork();
    const {switchNetwork} = useSwitchNetwork();

    // Keep Ethers provider and signer updated for Wallet
    const [ethersProvider, setEthersProvider] = useState<any>(null);
    const [ethersSigner, setEthersSigner] = useState<any>(null);
    const [name, setName] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (walletAddress) {
            (async () => {
                const nameService = new NameService()
                setName(await nameService.getName(walletAddress!))
            })()
        }
    }, [walletAddress]);

    useEffect(() => {
        if (connector) {
            (async () => {
                const provider = await connector.getProvider();
                const ethersProviderNew = new ethers.BrowserProvider(provider as any);
                const ethersSignerNew = await ethersProviderNew.getSigner();

                setEthersProvider(ethersProviderNew);
                setEthersSigner(ethersSignerNew);
            })();
        } else {
            setEthersProvider(null);
            setEthersSigner(null);
        }
    }, [connector, walletAddress])

    return {
        isConnectDialogOpen,
        walletAddress,
        walletConnectionStatus: ((walletConnectionStatus === "connected") ? (ethersSigner ? "connected" : "connecting") : walletConnectionStatus) as ("disconnected" | "connected" | "reconnecting" | "connecting"),
        ethersProvider,
        chainCurrent,
        ethersSigner,
        name,


        // Methods
        showConnectDialog,
        closeConnectDialog,
        disconnectWallet,
        switchNetwork
    }
}