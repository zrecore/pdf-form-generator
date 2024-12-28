"use client"
import { MinusIcon } from "@heroicons/react/16/solid";
import { ButtonProps } from "../interfaces/buttonProps";

export default function RemoveButton(props:ButtonProps)
{
    function handleRemoveClick() {
        props?.onClick()
    }

    return (
        <button
            data-testid="remove-button"
            onClick={handleRemoveClick} className="rounded-md m-1 p-2 bg-red-500 hover:bg-red-400 drop-shadow-md">
            <MinusIcon className="size-2 text-white" />
        </button>
    )
}