"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({btnType, title, containerStyles, handleClick} : CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={() => {handleClick}}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    );
};

export default CustomButton;
