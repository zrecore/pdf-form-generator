"use client"
import { PrinterIcon } from "@heroicons/react/16/solid";

export default function PrintButton()
{
    function handlePrintClick() {
        console.log("PLUS CLICKED!")  
    }
    return (
        <button data-testid="print-button" onClick={ev => handlePrintClick()} className="rounded-md p-2 bg-slate-500 hover:bg-slate-400 drop-shadow-md">
            <PrinterIcon className="size-6 text-white" />
        </button>
    )
}