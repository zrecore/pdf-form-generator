"use client"

import { FC, useState, useId, KeyboardEvent } from "react"

type EditableInputChangeFunction = {
    (newValue:string): void
}
interface EditableInputProps
{
    className?: string,
    type?:string,
    id?:string,
    name?:string,
    value?:string,
    isDirty?:boolean,
    isEditable?:boolean,
    onClick?:Function,
    onChange?:EditableInputChangeFunction,
    onFocus?:Function,
    onBlur?:Function,
    onReturn?:Function,
    maxLength?:number,
    tabIndex?:number
}
const EditableInput:FC<EditableInputProps> = (props) =>
{
    const defaultUUID = useId()
    const [inputValue, setInputValue] = useState(props.value ?? "")
    const [inputIsEditable, setInputIsEditable] = useState(props.isEditable ?? false)
    const [inputMaxLength, setInputMaxLength] = useState(props.maxLength ?? 15)
    const [inputId, setInputId] = useState(props.id ?? defaultUUID)

    function handleOnInputBlur() : void
    {
        const input = document.getElementById(inputId)
        setInputIsEditable(false)

        if (input === document.activeElement) {
            input.blur()
        }

        if (props.onBlur) props.onBlur(input)

    }
    function handleOnInputFocus() : void
    {
        const input = document.getElementById(inputId)
        setInputIsEditable(true)
        if (input !== document.activeElement) {
            input.focus()
        }

        if (props.onFocus) props.onFocus(input)
    }

    function handleOnInputChange(newValue:string) : void
    {
        setInputValue(newValue)
        if (props.onChange) props.onChange(newValue)
    }

    function handleOnClick() : void
    {
        // TODO: should props.onClick have event.preventDefault() to stop
        // propagation to setInputIsEditable() call?
        setInputIsEditable(true)
        if (props.onClick) props.onClick()
    }

    function handleOnKeyUp(ev: KeyboardEvent) : void
    {
        const key = ev.key
        const target : HTMLInputElement = ev.currentTarget as HTMLInputElement
        
        if ( (key == 'Tab' || key == 'Enter') && props.onReturn) {
            if (!inputIsEditable) setInputIsEditable(false)
        }

        if (key == 'Enter' && props.onReturn) {
            props.onReturn(target)
        }
    }

    return (
        <input
            tabIndex={props.tabIndex ?? 0}
            data-testid="test-input"
            id={inputId}
            name={props.name}
            className={"p-1 editable-input " + (inputIsEditable ? "edit-mode " : "static-mode ") + (props.className ?? "") + " print:p-0"}
            type={props.type}
            value={inputValue}
            onChange={ev => handleOnInputChange(ev.target.value)}
            onClick={handleOnClick}
            onBlur={handleOnInputBlur}
            onFocus={handleOnInputFocus}
            onKeyUp={(ev) => handleOnKeyUp(ev)}
            maxLength={inputMaxLength}
        ></input>
    )
}

export default EditableInput