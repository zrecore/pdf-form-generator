"use client"
import { PhotoIcon } from "@heroicons/react/16/solid";

export default function PhotoButton()
{
    function handlePhotoClick() {
        console.log("PLUS CLICKED!")  
    }
    return (
        <button data-testid="photo-button" onClick={ev => handlePhotoClick()} className="rounded-md p-2 bg-slate-500 hover:bg-slate-400 drop-shadow-md">
            <PhotoIcon className="size-6 text-white" />
        </button>
    )
}