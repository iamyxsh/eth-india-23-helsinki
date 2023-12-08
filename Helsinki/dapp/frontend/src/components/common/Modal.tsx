import React from "react"

type Props = {
    isOpen: boolean
    children: JSX.Element
}

const Modal = ({isOpen, children}: Props) => {
    if (isOpen) {
        return (
            <div
                className="w-full h-full flex justify-center items-center bg-opacity-50 backdrop-blur-md z-50">
                <div
                    className={`bg-secondaryBg rounded-lg flex justify-start items-center p-10 flex-col w-[50%] h-[50%]`}
                >
                    {children}
                </div>
            </div>
        )
    } else {
        <div className={"hidden"}/>
    }

}

export default Modal
