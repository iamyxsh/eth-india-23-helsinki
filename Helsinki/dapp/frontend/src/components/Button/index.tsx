import React from "react"

type Props = {
    onClick?: any
    label: string
    className?: string
}

const Button = ({label, className, onClick}: Props) => {
    return (
        <div
            onClick={() => onClick()}
            className={`bg-primary w-[10rem] h-auto px-5 cursor-pointer text-center py-2 text-white ${className}`}
        >
            {label}
        </div>
    )
}

export default Button
