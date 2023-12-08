import React from "react"
import {useAccount} from "wagmi";
import Button from "@/components/Button";
import {shortAddress} from "@/utils";

type Props = {}
const Navbar = (props: Props) => {
    const {address} = useAccount()
    return (
        <div className="flex justify-end items-end w-full py-5">
            <div className="w-[5rem] flex justify-end">
                <Button
                    onClick={() => {

                    }}
                    label={address ? shortAddress(address as any) : ""}
                />
            </div>
        </div>
    )
}

export default Navbar
