"use client"
import { EventHandler, FC, ReactElement, useState } from "react"

interface EditableInputProps
{
    className?: string,
    type?:string,
    id?:string,
    name?:string,
    value?:string,
    isDirty?:boolean,
    isEditable?:boolean,

    onChange:EventHandler<any>
}
const EditableInput:FC<EditableInputProps> = (props) =>
{
    const [inputValue, setInputValue] = useState(props.value ?? "")
    const [inputIsEditable, setInputIsEditable] = useState(props.isEditable ?? false)
    const inputClassName = props.className ?? false

    function handleOnInputBlur()
    {
        setInputIsEditable(false);
    }

    function handleOnInputChange(newValue:string)
    {
        setInputValue(newValue)
        props.onChange(newValue)
    }

    function handleOnDoubleClick()
    {
        console.log("Double click")
        setInputIsEditable(true)
    }
    
    if (inputIsEditable)
    {
        return (
            <input
                data-testid="test-input"
                id={props.id}
                name={props.name}
                className={inputClassName + " editable-input"}
                type={props.type}
                value={inputValue}
                onChange={ev => handleOnInputChange(ev.target.value)}
                onBlur={handleOnInputBlur}
            ></input>
        )
    } else {
        return (
            <div className={props.className + " static-input"} onDoubleClick={handleOnDoubleClick}>{inputValue}</div>
        )
    }
}

export default EditableInput