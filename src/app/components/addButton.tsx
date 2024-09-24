"use client"
import { PlusIcon } from "@heroicons/react/16/solid";

export default function AddButton()
{
    function handlePlusClick() {
        console.log("PLUS CLICKED!")  
    }
    return (
        <button data-testid="add-button" onClick={ev => handlePlusClick()} className="rounded-md p-2 bg-cyan-500 hover:bg-cyan-400 drop-shadow-md">
            <PlusIcon className="size-6 text-white" />
        </button>
    )
}