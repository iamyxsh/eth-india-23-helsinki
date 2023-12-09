import {useWallet} from "@/hooks/useWallet";
import {SafeService} from "@/services/safe";
import {useState} from "react";
import {ProposalService} from "@/services/proposal";
import {SafeTransactionData} from "@safe-global/safe-core-sdk-types";

/**
 * @description Useful methods and data about Wallet
 */
export const useSafe = () => {
    const [safe, setSafe] = useState("")
    const {ethersSigner, walletAddress} = useWallet()


    const safeExists = async (address: string, proposal: any): Promise<string> => {
        const safe = new SafeService(ethersSigner, proposal.address)
        return safe.getSafe(address)
    }
    const createSafe = async (owners: string[], threshold: number, proposal: any): Promise<string> => {
        const safe = new SafeService(ethersSigner, proposal.address)
        return safe.createSafe(owners, threshold)
    }

    const createFundTx = async (safeAddress: string, amount: string): Promise<SafeTransactionData> => {
        const safeService = new SafeService(ethersSigner, safeAddress)
        const safeTx = await safeService.createFundTx(amount, safeAddress)

        const proposalService = new ProposalService()
        await proposalService.updateFundTxHash(safeAddress, JSON.stringify(safeTx.data))
        return safeTx.data
    }

    return {
        safe,
        createSafe,
        safeExists,
        createFundTx
    }
}