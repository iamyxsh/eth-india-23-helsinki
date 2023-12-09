import {ethers, Signer} from "ethers";
import Safe, {EthersAdapter, SafeAccountConfig, SafeFactory} from "@safe-global/protocol-kit";
import {MetaTransactionData, SafeTransaction} from "@safe-global/safe-core-sdk-types";

export class SafeService {
    public safeAddress: string
    private signer: Signer
    private readonly adapter: EthersAdapter

    constructor(signer: Signer, safeAddress: string) {
        this.signer = signer
        this.safeAddress = safeAddress
        this.adapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer
        })
    }

    async createSafe(owners: string[], threshold: number): Promise<string> {
        const safeFactory = await SafeFactory.create({ethAdapter: this.adapter})

        const safeAccountConfig: SafeAccountConfig = {
            owners,
            threshold,
        }

        const safe = await safeFactory.deploySafe({safeAccountConfig})

        return await safe.getAddress()
    }

    async currentBalance(): Promise<bigint> {
        const provider = this.adapter.getProvider()
        return await provider.getBalance(this.safeAddress);
    }

    async createFundTx(value: string, to: string): Promise<SafeTransaction> {

        const amount = ethers.parseUnits(value, 'ether').toString()

        const safeTransactionData: MetaTransactionData = {
            to,
            data: '0x',
            value: amount
        }

        const safe = await Safe.create({
            safeAddress: this.safeAddress,
            isL1SafeSingleton: false,
            ethAdapter: this.adapter
        })


        return await safe.createTransaction({transactions: [safeTransactionData]})
    }

    async getSafe(address: string): Promise<string> {
        return "0xabc"
    }
}