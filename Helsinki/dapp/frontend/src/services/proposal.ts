import axios from "axios";

export class ProposalService {

    constructor() {
    }

    async getProposal(address: string): Promise<string | undefined> {
        return axios.get(`http://localhost:8080/api/proposal/${address}?type=walletAddress`).then(res => res.data)
    }

    async createProposal(safeAddress: string): Promise<void> {
        return
    }

    async updateFundTxHash(safeAddress: string, hash: string): Promise<void> {
        return
    }

    async getAllProposals(address: string): Promise<any[]> {
        return []
    }
}