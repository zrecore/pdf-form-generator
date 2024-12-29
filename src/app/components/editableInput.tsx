import { FC, useState } from "react"

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
    onChange?:EditableInputChangeFunction
}
const EditableInput:FC<EditableInputProps> = (props) =>
{
    const [inputValue, setInputValue] = useState(props.value ?? "")
    const [inputIsEditable, setInputIsEditable] = useState(props.isEditable ?? false)

    function handleOnInputBlur() : void
    {
        setInputIsEditable(false);
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
    
    if (inputIsEditable)
    {
        return (
            <input
                data-testid="test-input"
                id={props.id}
                name={props.name}
                className={"p-1 editable-input edit-mode " + (props.className ?? "")}
                type={props.type}
                value={inputValue}
                onChange={ev => handleOnInputChange(ev.target.value)}
                onClick={handleOnClick}
                onBlur={handleOnInputBlur}
                onMouseLeave={handleOnInputBlur}
            ></input>
        )
    } else {
        return (
            <div 
                data-testid="test-input"
                id={props.id}
                className={"p-1 editable-input static-mode " + (props.className ?? "")}
                onClick={handleOnClick}
            >{inputValue}</div>
        )
    }
}

export default EditableInput