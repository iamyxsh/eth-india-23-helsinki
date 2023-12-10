'use client'

import Button from "@/components/Button";
import {useWeb3Modal} from "@web3modal/wagmi/react";
import {useAccount} from "wagmi";
import {useEffect, useState} from "react";
import {ProposalService} from "@/services/proposal";
import {useWallet} from "@/hooks/useWallet";
import {PostCard} from "@/components/common/PostCard";
import axios from "axios";


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

    useEffect(() => {
        (async () => {
            let {result} = await axios.get("http://localhost:8080/api/proposals").then(res => res.data)
            setProposals(result)
        })()
    }, []);
    

    if (!isConnected) {
        return (
            <div className={"flex flex-col justify-center items-center"}>
                <div
                    className={"flex bg-secondaryBg flex-col justify-start p-3 gap-10 items-center h-[10rem] w-[15rem] border-[1.5px] border-black"}>
                    <h1 className={"text-center text-white w-full"}>Get started with Helsinki</h1>
                    <Button label={"Connect Wallet"} onClick={() => open()}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"flex flex-col justify-start items-start"}>
                {proposals && proposals.length > 0 ? proposals.map((item, ind) => {
                    return (<PostCard key={ind} likes={item.likes} dislikes={item.dislikes} data={item.data}
                                      name={item.name} link={item.safeAddress}/>
                    )
                }) : <h1 className={"text-white text-xl"}>No proposals yet.</h1>}
            </div>
        )
    }
}
