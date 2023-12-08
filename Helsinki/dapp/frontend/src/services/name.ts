export class NameService {

    async getName(address: string): Promise<string | undefined> {
        return "yash"
    }

    async createName(address: string, name: string): Promise<void> {
        return
    }
}