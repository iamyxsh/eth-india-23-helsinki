'use client'

import Modal from "@/components/common/Modal";
import {useState} from "react";
import Button from "@/components/Button";
import {useProposal} from "@/hooks/useProposal";
import {ethers} from "ethers";
import {useSafe} from "@/hooks/useSafe";
import {toast} from "react-toastify";
import {PostCard} from "@/components/common/PostCard";

export const ProposalPage = () => {
    const [data, setData] = useState<any>()
    let {proposal} = useProposal()
    const {createFundTx} = useSafe()

    proposal = {
        securityAmount: BigInt("1000000000000000000"),
        safeAddress: "0x",
        isFunded: true,
        publish: true,
        likes: 10,
        dislikes: 2,
        data: "This is a test proposal.",
        name: "Yash Sharma"
    }

    const sendFund = async () => {
        const hash = await createFundTx(proposal.safeAddress, proposal.securityAmount.toString())
        toast.success(`Transaction completed.
                                Hash: ${hash}
        `)
    }

    if (!proposal) {
        return (
            <div className={"flex flex-col justify-start items-start gap-10"}>
                <div>
                    <h1 className={"text-3xl text-primary mb-2"}>Proposal</h1>
                    <h1 className={"text-white text-lg"}>You can create a proposal for your loan.</h1>
                </div>
                <Modal isOpen={true} className={"m-auto bg-secondaryBg py-10"}>
                    <div className={"flex flex-col w-2/3 gap-10"}>
                        <textarea value={data} onChange={(e) => setData(e.target.value)}/>
                        <Button label={"Save"} className={"self-end rounded-sm"}/>
                    </div>
                </Modal>

            </div>
        )
    } else if (!proposal.isFunded) {
        return (
            <div className={"flex flex-col justify-start items-start gap-10"}>
                <div>
                    <h1 className={"text-3xl text-primary mb-2"}>Fund your safe</h1>
                    <h1 className={"text-white text-lg"}>To be eligible for the loan, you need to fund your
                        proposal.</h1>
                </div>
                <Modal isOpen={true} className={"m-auto bg-secondaryBg py-10"}>
                    <div className={"flex flex-col justify-start items-center gap-5"}>
                        <h1 className={"text-3xl text-white mb-2"}>You need to
                            send {ethers.formatEther(`${proposal.securityAmount}`)} {process.env.TOKEN_NAME || "Matic"} to
                            your
                            proposal
                            as security.</h1>
                        <Button label={"Send Funds"} onClick={sendFund}/>
                    </div>
                </Modal>
            </div>
        )
    } else if (proposal.isFunded && !proposal.publish) {
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
    } else if (proposal.isFunded && proposal.publish) {
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