'use client'

import {Button} from "@/components/common/Button";
import {useWeb3Modal} from "@web3modal/wagmi/react";
import {useAccount} from "wagmi";
import {useEffect, useState} from "react";
import {ProposalService} from "@/services/proposal";
import {useWallet} from "@/hooks/useWallet";
import {PostCard} from "@/components/common/PostCard";


export default function Home() {
    const {open} = useWeb3Modal()
    const {isConnected} = useAccount()
    const {walletAddress} = useWallet()
    const [proposals, setProposals] = useState<any[]>([])

    useEffect(() => {
        if (isConnected) {
            (async () => {
                const proposalService = new ProposalService()
                setProposals(await proposalService.getAllProposals(walletAddress as string))
            })()
        }
    }, [isConnected]);

    if (!isConnected) {
        return (
            <div className="flex justify-center items-center bg-[#DEDDDD] min-h-screen">
                <div
                    className={"flex bg-gray-200 flex-col justify-start p-3 gap-10 items-center h-[10rem] w-[15rem] border-[1.5px] border-black"}>
                    <h1 className={"text-center w-full"}>Get started with Helsinki</h1>
                    <Button onClick={() => open()}>
                        Connect Wallet
                    </Button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"flex flex-col justify-start items-start"}>
                {proposals && proposals.length > 0 ? proposals.map((item, ind) => {
                    return (<PostCard key={ind} likes={item.likes} dislikes={item.dislikes} data={item.data}
                                      name={item.name} link={item.id}/>
                    )
                }) : <h1 className={"text-white text-xl"}>No proposals yet.</h1>}
            </div>
        )
    }
}
