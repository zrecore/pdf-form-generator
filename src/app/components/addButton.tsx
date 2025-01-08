import { PlusIcon } from "@heroicons/react/24/outline";
import { ButtonProps } from "../interfaces/buttonProps";

export default function AddButton(props:ButtonProps)
{
    function handlePlusClick() {
        if (props.onClick) props.onClick()
    }

    return (
        <button
            data-testid="add-button"
            onClick={handlePlusClick}
            aria-label="Add Task Button"
            className={(props.className ?? "") + " rounded-md border-solid border-2 p-1 w-full bg-transparent text-cyan-700 hover:text-cyan-400 border-cyan-700 hover:border-cyan-400 print:hidden"}
        >
            <PlusIcon className="size-4 mr-1 inline" />
            Add Task
        </button>
    )
}