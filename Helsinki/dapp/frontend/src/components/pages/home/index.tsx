'use client'

import {Button} from "@/components/common/Button";
import {useWeb3Modal} from "@web3modal/wagmi/react";
import {useAccount} from "wagmi";


export default function Home() {
    const {open} = useWeb3Modal()
    const {isConnected} = useAccount()
    
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
        return (<div>hello </div>)
    }
}
