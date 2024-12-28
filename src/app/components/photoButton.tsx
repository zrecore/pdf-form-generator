"use client"
import { PhotoIcon } from "@heroicons/react/16/solid";
import { ButtonProps } from "../interfaces/buttonProps";

export default function PhotoButton(props:ButtonProps)
{
    function handlePhotoClick() {
        props?.onClick()
    }
    return (
        <button
            data-testid="photo-button"
            onClick={handlePhotoClick}
            className="rounded-md p-2 bg-slate-500 hover:bg-slate-400 drop-shadow-md"
        >
            <PhotoIcon className="size-6 text-white" />
        </button>
    )
}