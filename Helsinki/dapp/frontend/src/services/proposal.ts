export class ProposalService {

    constructor() {
    }

    async getProposal(safeAddress: string): Promise<string | undefined> {
        return "This is a proposal"
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