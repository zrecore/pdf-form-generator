import { NewTask, Task } from "../interfaces/task";
import { TaskProps } from "../interfaces/taskProps";
import AddButton from "./addButton";
import EditableInput from "./editableInput";
import RemoveButton from "./removeButton";

export default function TaskList(props:TaskProps)
{
    function handleAddTask() {
        if (props.onAddTask) props.onAddTask()
    }

    function handleRemoveTask(taskId:number) {
        if (props.onRemoveTask) props.onRemoveTask(taskId)
    }

    function handleUpdateTask(newValue:Task)
    {
        if (props.onUpdateTask) props.onUpdateTask(newValue)
    }

    function generateUpdatedTask(task:Task, updatedProperties:Object)
    {
        const updatedTask : Task = {...task, ...updatedProperties}
        return updatedTask
    }

    return (
        <ul data-testid="task-list" className="task-list m-0 p-0">
            {
                props.tasks?.map((task:Task|NewTask) => {

                return <li key={task.id} className="task-item flex flex-row hover:bg-cyan-300 m-0 p-0">
                    <label className="flex items-center p-0 m-0 mb-1 cursor-pointer text-lg/[0.2in] select-none">
                        <input
                            type="checkbox"
                            className="hidden opacity-0 cursor-pointer h-[0.2in] w-[0.2in] peer checked:bg-white checked:text-black"
                        />
                        <div className="
                            pl-[0.025in]
                            w-[0.2in]
                            h-[0.2in]
                            bg-gray-200
                            peer-checked:bg-white
                            peer-checked:text-black
                            after:content-none
                            peer-checked:after:content-['✓']
                            hover:bg-gray-400
                            border
                            border-1
                            border-solid
                            border-gray-800
                            rounded-sm" />
                    </label>
                    <EditableInput
                        tabIndex={task.id}
                        className="rounded-sm m-1 hover:border-white hover:border-1 hover:border-solid text-nowrap text-sm/[0.125in]"
                        value={ task.title }
                        maxLength={ 15 }
                        onChange={
                            (newValue:string) => {
                                handleUpdateTask(
                                    generateUpdatedTask(task as Task, {title: newValue})
                                )
                            }
                        }
                    />
                    <RemoveButton
                        className="ml-0 text-white hover:text-red-700"
                        onClick={() => { handleRemoveTask(task.id) }}
                    />
                </li>
                })
            }
            
            <li className={"m-0 p-0 " + (props.hasAddButton ? "" : "hidden")}><AddButton onClick={handleAddTask} /></li>

        </ul>
    )
}