'use client'

import Modal from "@/components/common/Modal";
import {useState} from "react";
import Button from "@/components/Button";
import {useProposal} from "@/hooks/useProposal";
import {PostCard} from "@/components/common/PostCard";
import {ethers} from "ethers";
import {abi} from "../../abis/Factory.json"
import {useWallet} from "@/hooks/useWallet";

export const ProposalPage = () => {
    const [data, setData] = useState<any>()
    const [tenure, setTenure] = useState<any>(6)
    const [amount, setAmount] = useState<any>(BigInt(10 ** 18))
    let {proposal} = useProposal()
    let {walletAddress, ethersSigner} = useWallet()


    const createProposal = async () => {
        const factory = new ethers.Contract("0x4bd0460305D43dEe927125Df133aAA57C54D974A", abi, ethersSigner)
        const gasOptions = {
            gasPrice: ethers.parseUnits('50', 'gwei'),
            gasLimit: 200000,
        };

        const result = await factory.createProposal(amount, (BigInt(10) * amount) / BigInt(100), tenure, walletAddress, 1, gasOptions)
        console.log(result, "result")
    }
    if (proposal) {

        if (!proposal.walletAddress) {
            return (
                <div className={"flex flex-col justify-start items-start gap-10"}>
                    <div>
                        <h1 className={"text-3xl text-primary mb-2"}>Proposal</h1>
                        <h1 className={"text-white text-lg"}>You can create a proposal for your loan.</h1>
                    </div>
                    <Modal isOpen={true} className={"m-auto bg-secondaryBg py-10"}>
                        <div className={"flex flex-col w-2/3 gap-10"}>
                            <textarea value={data} onChange={(e) => setData(e.target.value)}/>

                            <select className="border w-1/3 rounded px-3 py-2" value={tenure}
                                    onChange={(e: any) => setTenure(e.target.value)}>
                                <option value={6}>6</option>
                                <option value={12}>12</option>
                            </select>
                            <select className="border w-1/3 rounded px-3 py-2" value={amount}
                                    onChange={(e: any) => setAmount(e.target.value)}>
                                <option value={BigInt(0.01 * 10 ** 18)}>0.01</option>
                                <option value={BigInt(0.02 * 10 ** 18)}>0.02</option>
                            </select>
                            <Button onClick={() => createProposal()} label={"Save"}
                                    className={"self-end rounded-sm"}/>
                        </div>
                    </Modal>
                </div>
            )
        } else if (!proposal.publish) {
            return (<div className={"flex flex-col justify-start items-start gap-10"}>
                <div>
                    <h1 className={"text-3xl text-primary mb-2"}>Publish </h1>
                    <h1 className={"text-white text-lg"}>Now you are all set to showcase your proposal.</h1>
                </div>
                <Modal isOpen={true} className={"m-auto bg-secondaryBg py-10"}>
                    <div className={"flex flex-col justify-start items-center gap-5"}>
                        <h1 className={"text-white text-lg"}>Hit that publish button to put your proposal out in the
                            world.</h1>
                        <Button label={"Publish!"} onClick={() => {
                        }}/>
                    </div>
                </Modal>
            </div>)
        } else if (proposal.publish) {
            return (
                <div className={"flex justify-start items-start"}>
                    <PostCard likes={proposal.likes} dislikes={proposal.dislikes}
                              data={proposal.data}
                              name={proposal.name}/>
                </div>)
        } else {
            return <></>
        }
    }
}