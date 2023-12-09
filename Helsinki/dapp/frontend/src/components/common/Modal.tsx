import React from "react"

type Props = {
    isOpen: boolean
    className?: string
    children: JSX.Element
}

const Modal = ({isOpen, children, className}: Props) => {
    if (isOpen) {
        return (
            <div
                className={"w-full h-full flex justify-center items-center bg-opacity-50 backdrop-blur-md z-50 " + className}>
                {children}
            </div>
        )
    } else {
        return <div className={"hidden"}/>
    }

}

export default Modal
