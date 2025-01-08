import { PrinterIcon } from "@heroicons/react/16/solid";
import { ButtonProps } from "../interfaces/buttonProps";

export default function PrintButton(props: ButtonProps)
{
    function handlePrintClick() {
        if (props.onClick) props.onClick()
    }
    return (
        <button
            tabIndex={0}
            data-testid="print-button"
            aria-label="Print"
            aria-description="Print the current page as a list with checkboxes."
            onClick={handlePrintClick}
            className={(props.className ?? "") + " rounded-md p-2 bg-slate-500 hover:bg-slate-400 drop-shadow-md"}
        >
            <PrinterIcon className="size-6 text-white" />
        </button>
    )
}