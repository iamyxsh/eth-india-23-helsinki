import Image from "next/image"
import Link from "next/link"
import React from "react"
import {SIDEBAROPTIONS} from "@/constants";
import {logo, logout} from "@/assets";
import {useWallet} from "@/hooks/useWallet";
import {useRouter} from "next/router";


const Sidebar = () => {
    const router = useRouter()
    const {disconnectWallet} = useWallet()
    return (
        <div className="flex w-full h-screen flex-col justify-around items-center mx-7">
            <div
                className={`h-[10%] w-full rounded-full text-center flex items-center justify-center text-white bg-secondaryBg`}
            >
                <Link href={"/"} className="cursor-pointer">
                    <Image src={logo} width={50} height={50} alt="logo"/>
                </Link>
            </div>
            <div
                className={`bg-secondaryBg w-24 h-[70%] p-10 rounded-2xl`}
            >
                <div className="flex flex-col justify-between h-full">
                    <div>
                        {SIDEBAROPTIONS.map((option, key) => (
                            <Link key={key} href={option.link}>
                                <div className="w-[48px] h-[48px]">
                                    <Image
                                        className="w-1/2 h-1/2"
                                        src={option.imgUrl}
                                        alt={option.name}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div
                        className="w-[48px] h-[48px] cursor-pointer"
                        onClick={() => {
                            disconnectWallet()
                            router.push("/")

                        }}
                    >
                        <Image
                            className="w-1/2 h-1/2"
                            src={logout}
                            alt={"logout"}
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
