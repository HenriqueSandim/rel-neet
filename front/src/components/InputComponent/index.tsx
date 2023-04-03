import { useState } from "react";
import { IInput, IPasswordInput } from "./interfaces";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { DivInput, DivPasswordInput } from "./styles";

export function InputComponent({fieldName, type}: IInput) {
    const a = ""

    return (
        <DivInput>
            <label>{fieldName}</label>
            <input
                placeholder={`Insert ${fieldName} here`}
                type={type}
            ></input>
        </DivInput>
    )
}

export function PasswordInputComponent({fieldName}: IPasswordInput) {
    const [inputType, setInputType] = useState<string>("password")

    const changeInputType = () => {
        inputType === "password" ? setInputType("text") : setInputType("password")
    }

    return (
        <DivPasswordInput>
            <label>{fieldName}</label>
            <div>
                <input
                    placeholder={`Insert ${fieldName} here`}
                    type={inputType}
                >
                </input>
                <button
                    onClick={changeInputType}
                >
                    {inputType === "password" ? <AiFillEye /> : <AiFillEyeInvisible />} 
                </button>
            </div>
        </DivPasswordInput>
    )
}