import {ButtonHTMLAttributes} from "react";


export const Button = ({onClick, children}: ButtonHTMLAttributes<any>) => {
    return <button className={"bg-[#F8D558] w-[10rem] h-[2rem] border-[1px] border-black text-sm"}
                   onClick={onClick}>{children}</button>
}