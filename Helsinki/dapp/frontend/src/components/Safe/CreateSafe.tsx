import Modal from "@/components/common/Modal";
import {useEffect, useState} from "react";
import {Input} from "@/components/common/Input";
import {add} from "@/assets";
import Image from "next/image";
import Button from "@/components/Button";

export const CreateSafe = () => {
    const [inputs, setInputs] = useState([''])
    const [options, setOptions] = useState<any[]>([])
    const [threshold, setThreshold] = useState(2)
    const handleInputChange = (index: number, value: string) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = value;
        setInputs(updatedInputs);
    };

    const handleRemoveInput = (index: number) => {
        const updatedInputs = [...inputs];
        updatedInputs.splice(index, 1); // Remove the input at the specified index
        setInputs(updatedInputs);
    };

    useEffect(() => {
        const options = [];
        for (let i = 2; i <= inputs.length; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        setOptions(options)
    }, [inputs.length])


    return (
        <div className={"flex flex-col justify-start items-start gap-10"}>
            <div>
                <h1 className={"text-3xl text-primary mb-2"}>Create a Safe</h1>
                <h1 className={"text-white text-lg"}>You need to create a safe to start your loan proposal.</h1>
            </div>
            <Modal isOpen={true} className={"m-auto bg-secondaryBg py-10"}>

                <div className={"flex flex-col justify-center w-1/2 items-start"}>
                    <div className={"flex justify-start items-start gap-10"}>
                        <h1 className={"text-white text-lg"}>Owners</h1>
                        <div className={"flex flex-col justify-start items-start gap-1"}>
                            {inputs.map((input, index) => (
                                <div key={index} className={"flex gap-5 justify-start items-center"}>
                                    <Input
                                        className={"bg-white px-2 rounded-md"}
                                        placeholder={"0x..."}
                                        type="text"
                                        value={input}
                                        onChange={(e: any) => handleInputChange(index, e.target.value)}
                                    />
                                    <button className={"mr-[5px]"} onClick={() => handleRemoveInput(index)}>❌
                                    </button>
                                </div>
                            ))}
                            <Image className={"w-7 self-end cursor-pointer"} src={add}
                                   onClick={() => setInputs(prev => ([...prev, ""]))}
                                   alt={"add"}/>
                        </div>
                    </div>
                    <div className={"flex justify-start items-start gap-[1.2rem]"}>
                        <h1 className={"text-white text-start text-lg"}>Threshold</h1>
                        <select className="border rounded px-3 py-2" value={threshold}
                                onChange={(e: any) => setThreshold(e.target.value)}>
                            {options}
                        </select>
                    </div>
                    <Button className={"self-end mt-10"} label={"Create Safe"} onClick={() => {
                    }}/>
                </div>
            </Modal>

        </div>)
}