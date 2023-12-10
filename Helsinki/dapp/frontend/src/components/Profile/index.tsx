import {useWallet} from "@/hooks/useWallet";
import Modal from "@/components/common/Modal";
import {RegisterName} from "@/components/Profile/RegisterName";

const Profile = () => {
    const {name, walletAddress} = useWallet()


    if (name) {
        return <Modal isOpen={true} className={"m-auto bg-secondaryBg w-[30rem] h-[15rem] py-10"}>
            <div className={"h-full w-full flex flex-col gap-10"}>
                <h1 className={"text-2xl text-center text-white"}>Your Registered Name</h1>
                <div className={"flex flex-col justify-between items-start gap-10"}>
                    <h1 className={"text-primary"}>{walletAddress}</h1>
                    <h1 className={"text-white capitalize"}>{name}</h1>
                </div>
            </div>
        </Modal>
    } else {
        return (
            <Modal isOpen={true} className={"m-auto bg-secondaryBg w-[30rem] h-[25rem] py-10"}>
                <RegisterName/>
            </Modal>
        )
    }

}

export default Profile

