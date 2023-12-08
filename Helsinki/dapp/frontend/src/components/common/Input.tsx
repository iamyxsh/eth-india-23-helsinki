import React from "react"

interface Props {
    type?: string
    placeholder: string
    className?: string
    value: string
    onChange: any
}

export const Input = ({
                          onChange,
                          placeholder,
                          className,
                          type = "text",
                          value,
                      }: Props) => {
    return (
        <input
            value={value}
            className={`w-full text-white focus:outline-none bg-[#211E29] h-10 py-2 rounded-3xl ${className}`}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
        />
    )
}

