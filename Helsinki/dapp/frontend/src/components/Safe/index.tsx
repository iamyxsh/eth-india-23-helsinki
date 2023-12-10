import {NameService} from "@/services/name";
import {ProposalPage} from "@/components/Safe/ProposalPage";

const nameService = new NameService()

const Safe = () => {
    return <ProposalPage/>
}

export default Safe