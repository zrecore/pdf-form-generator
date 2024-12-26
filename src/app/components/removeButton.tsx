"use client"
import { MinusIcon } from "@heroicons/react/16/solid";

interface RemoveButtonProps
{
    onClick: Function
}

export default function RemoveButton(props:RemoveButtonProps)
{
    function handleRemoveClick() {
        console.log("MINUS CLICKED!")
        props.onClick()
    }

    return (
        <button data-testid="remove-button" onClick={ev => handleRemoveClick()} className="rounded-md m-1 p-2 bg-red-500 hover:bg-red-400 drop-shadow-md">
            <MinusIcon className="size-2 text-white" />
        </button>
    )
}