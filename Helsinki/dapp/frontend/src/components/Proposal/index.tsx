import Modal from "@/components/common/Modal";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {ProposalService} from "@/services/proposal";

export const Proposal = () => {
    const [proposal, setProposal] = useState<any>()

    const params = useParams()

    useEffect(() => {
        (async () => {
            const proposalService = new ProposalService()
            setProposal(await proposalService.getProposal(params.id as string))
        })()
    }, [])

    const likePost = async () => {

    }

    const dislikePost = async () => {

    }

    const longProposal = async () => {

    }

    const shortProposal = async () => {

    }

    return (<Modal isOpen={true} className={"justify-start items-start bg-secondaryBg py-5 h-auto my-[5rem]"}>
        <div className={"flex flex-col justify-start items-start p-10 h-full w-full gap-10"}>
            <h1 className={"text-primary text-4xl text-start"}>{proposal.name || "Yash Sharma"}</h1>
            <h1 className={"text-lg text-white"}>{proposal.data || "This is a test proposal."}</h1>
            <div className={"flex justify-between items-stretch w-full"}>
                <div className={"flex justify-end items-end gap-5"}>
                    <h1 className={"uppercase text-primary text-xl cursor-pointer"} onClick={longProposal}>Long</h1>
                    <h1 className={"uppercase text-red-600 text-xl cursor-pointer"} onClick={shortProposal}>Short</h1>
                </div>
                <div className={"flex justify-end items-end w-full gap-5"}>
                    <h1 className={"uppercase text-primary text-4xl cursor-pointer"} onClick={likePost}>🔥</h1>
                    <h1 className={"uppercase text-red-600 text-4xl cursor-pointer"} onClick={dislikePost}>🤮</h1>
                </div>
            </div>
        </div>
    </Modal>)
}

