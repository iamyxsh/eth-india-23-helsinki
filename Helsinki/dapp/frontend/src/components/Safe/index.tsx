import {NameService} from "@/services/name";
import {useWallet} from "@/hooks/useWallet";
import {ProposalPage} from "@/components/Safe/ProposalPage";
import {CreateSafe} from "@/components/Safe/CreateSafe";

const nameService = new NameService()

const Safe = () => {
    const {name} = useWallet()
    if (name) {
        return <ProposalPage/>
    } else {
        return <CreateSafe/>
    }
}

export default Safe