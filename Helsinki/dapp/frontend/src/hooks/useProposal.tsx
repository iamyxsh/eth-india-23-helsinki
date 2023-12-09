import {useWallet} from "@/hooks/useWallet";
import {useState} from "react";
import {ProposalService} from "@/services/proposal";
import {useSafe} from "@/hooks/useSafe";

/**
 * @description Useful methods and data about Wallet
 */
export const useProposal = () => {
    const [proposal, setProposal] = useState<any>()
    const {walletAddress} = useWallet()
    const {safeExists} = useSafe()

    const getProposal = async () => {
        const proposalService = new ProposalService()
        setProposal(proposalService.getProposal(await safeExists(walletAddress as string, proposal)))
        return proposal
    }

    return {
        proposal,

        getProposal
    }
}