import {useWallet} from "@/hooks/useWallet";
import {useEffect, useState} from "react";
import {ProposalService} from "@/services/proposal";

export const useProposal = () => {
    const [proposal, setProposal] = useState<any>()
    const {walletAddress} = useWallet()

    useEffect(() => {
        (async () => {
            await getProposal()
        })()
    }, [])

    const getProposal = async () => {
        const proposalService = new ProposalService()
        setProposal(await proposalService.getProposal(walletAddress as string))
        return proposal
    }

    return {
        proposal,

        getProposal
    }
}