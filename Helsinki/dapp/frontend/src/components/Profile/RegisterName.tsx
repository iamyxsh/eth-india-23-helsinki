import {useWallet} from "@/hooks/useWallet";
import {Input} from "@/components/common/Input";
import {useState} from "react";
import Button from "@/components/Button";
import {NameService} from "@/services/name";
import {toast} from "react-toastify";

const nameService = new NameService()

export const RegisterName = () => {
    const {walletAddress} = useWallet()
    const [name, setName] = useState<string>("")

    const registerName = async () => {
        await nameService.createName(walletAddress!, name)
        toast.success("Registered successfully")
    }

    return (
        <div className={"h-full w-full flex flex-col justify-between gap-10"}>
            <h1 className={"text-2xl text-center text-white"}>Register with your name</h1>
            <div className={"flex flex-col justify-between items-start"}>
                <h1 className={"text-primary"}>{walletAddress}</h1>
                <Input placeholder={"Enter your name"} value={name}
                       className={"mt-5 border-[1px] w-[82%] rounded-md px-2 border-white"}
                       onChange={(e: any) => setName(e.target.value)}/>

            </div>
            <Button label={"Register"} className={"self-end"} onClick={() => registerName()}/>
        </div>
    )
}