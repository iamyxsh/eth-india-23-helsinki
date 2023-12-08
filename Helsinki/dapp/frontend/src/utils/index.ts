export const shortAddress = (address: string) => {
    console.log("address", address);
    return address.slice(0, 6) + "..." + address.slice(-6)
}