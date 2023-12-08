import React from "react"
import "react-toastify/dist/ReactToastify.css"
import Head from "next/head"
import Navbar from "@/components/Navbar";
import Sidebar from "../Sidebar";
import {ToastContainer} from "react-toastify";

const PageHOC = ({children}: any) => {

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <div className={`bg-background w-screen h-screen flex justify-between`}>
                <div className="w-[5vw]">
                    <Sidebar/>
                </div>
                <div className="flex flex-col w-[80vw] mx-auto py-5">
                    <Navbar/>
                    {children}
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default PageHOC