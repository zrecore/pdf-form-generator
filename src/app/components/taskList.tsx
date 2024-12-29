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
        <ul className="task-list m-0 p-0">
            {
                props.tasks?.map((task:Task|NewTask) => {

                return <li key={task.id} className="flex flex-row hover:bg-cyan-300 m-0 p-0">
                    <EditableInput
                        className="rounded-sm m-1 hover:border-white hover:border-1 hover:border-solid"
                        value={ task.title }
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