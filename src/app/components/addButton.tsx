"use client"
import { PlusIcon } from "@heroicons/react/16/solid";
import { ButtonProps } from "../interfaces/buttonProps";

export default function AddButton(props:ButtonProps)
{
    function handlePlusClick() {
        props?.onClick()
    }

    return (
        <button
            data-testid="add-button"
            onClick={handlePlusClick}
            aria-label="Add Task Button"
            className="rounded-md p-1 m-1 bg-cyan-500 hover:bg-cyan-400 drop-shadow-md flex align-items-middle items-center content-center"
        >
            <div><PlusIcon className="size-4 text-white" /></div>
            <div className="p-1 text-white">Add Task</div>
        </button>
    )
}