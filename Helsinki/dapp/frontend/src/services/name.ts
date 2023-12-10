import axios from "axios";

export class NameService {

    async getName(address: string): Promise<string | undefined> {
        return axios.get(`http://localhost:8080/api/name/${address}`).then(res => res.data.name)
    }

    async createName(address: string, name: string): Promise<void> {
        await axios.post(`http://localhost:8080/api/name`, {
            name, address
        })
        return
    }
}