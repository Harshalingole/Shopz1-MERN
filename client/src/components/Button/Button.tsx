import React, { FC } from "react";

type ButtonProps = {
    text: string,
    color: string,
}
const Button: FC<ButtonProps> = ({text="View All",color="#00FAFF"}) => {
    return (
        <div className={`flex flex-row justify-center items-center bg-blue-400 bg-[${color}] py-2 rounded-md`}>
            <h1 className="font-bold text-gray-700 text-lg">{text}</h1>
        </div>
    )
}

export default Button;