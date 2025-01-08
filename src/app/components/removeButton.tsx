import { XCircleIcon } from "@heroicons/react/24/outline";
import { ButtonProps } from "../interfaces/buttonProps";

export default function RemoveButton(props:ButtonProps)
{
    function handleRemoveClick() {
        if (props.onClick) props.onClick()
    }

    return (
        <button
            tabIndex={0}
            data-testid="remove-button"
            onClick={handleRemoveClick}
            className={(props.className ?? "") + " m-1"}>
            <XCircleIcon className="size-4" />
        </button>
    )
}