"use client"
import { MinusIcon } from "@heroicons/react/16/solid";

export default function RemoveButton()
{
    function handleRemoveClick() {
        console.log("MINUS CLICKED!")  
    }
    return (
        <button data-testid="remove-button" onClick={ev => handleRemoveClick()} className="rounded-md p-2 bg-red-500 hover:bg-red-400 drop-shadow-md">
            <MinusIcon className="size-6 text-white" />
        </button>
    )
}