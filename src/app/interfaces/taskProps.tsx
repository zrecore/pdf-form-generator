import { NewTask, Task } from "./task";

interface TaskProps {
    onClick?: Function,
    onBlur?: Function,
    onChange?: Function,
    onAddTask?: Function,
    onRemoveTask?: Function,
    onUpdateTask?: Function,
    onReturn?: Function,
    className?: string,
    tasks?: (Task|NewTask)[],
    hasAddButton?: Boolean
}

export type {
    TaskProps
}