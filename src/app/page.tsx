"use client"

import Image from "next/image";
import { useState } from "react";
import PhotoButton from "./components/photoButton";
import PrintButton from "./components/printButton";
import EditableInput from "./components/editableInput";
import { revalidate } from "./actions/serverActions";
import { NewTask, Task } from "./interfaces/task";
import TaskList from "./components/taskList";


export default function Home() {

  const savedTasks:(Task|NewTask)[]     = loadTasks()
  const [tasks, setTasks]               = useState(savedTasks)
  const [headerText, setHeaderText]     = useState("List Name")
  const [totalColumns, setTotalColumns] = useState(3)
  const [tempId, setTempId]             = useState(1)

  const [totalRows, setTotalRows]       = useState(18)

  function loadTasks()
  {
    return []
  }

  function addNewTask()
  {
    if (tasks.length >= totalRows * 3) return

    const newTask: NewTask = {
      id: tempId,
      title: "New Task",
      description: "Task Description",
      isComplete: false
    }
    tasks.push(newTask)
    setTasks(tasks)
    setTempId(tempId + 1)

    revalidate("/")
  }

  function removeTask(id:number)
  {
    setTasks(
      tasks.filter((t:Task|NewTask) => {
        return t.id != id
      })
    )
    revalidate("/")
  }

  function handleHeaderChange(newValue:string)
  {
    setHeaderText(newValue)
    revalidate("/")
  }

  function handleTaskChange(updatedTask:Task)
  {
    setTasks(tasks.map((t) => {
      if (t.id == updatedTask.id)
      {
        t = updatedTask
      }
      return t
    }))
    revalidate("/")
  }

  function handleTotalColumnsUpdate(newValue:number)
  {
    setTotalColumns(newValue)
  }

  return (
    <div className="flex flex-col justify-center items-center print:m-0 print:p-0">
      <main className="flex flex-col gap-4 items-center sm:items-start print:border-none print:m-0 print:p-0">
        <div className="grid grid-flow-col justify-start align-middle space-x-4 w-full border border-solid border-slate-700 text-white bg-slate-600 font-semibold drop-shadow-lg p-4 print:border-none print:drop-shadow-none print:hidden">
          <div>Columns:
            <input type="number" value={totalColumns} onChange={e => handleTotalColumnsUpdate(parseInt(e.target.value))} />
          </div>
          <PhotoButton />
          <PrintButton />
        </div>
        <div className="paper-legal border border-solid border-gray-300 border-1 drop-shadow-lg text-gray-600 px-[0.25in] py-[0.25in] flex flex-col print:m-0 print:drop-shadow-none print:border-none">
          <div className="editable-header border-dashed border-2 border-gray-300 hover:border-cyan-700 hover:bg-cyan-300 rounded-md row-span-1 p-2 text-lg print:border-none">
            <EditableInput
              className="rounded-sm m-1 hover:border-white hover:border-1 hover:border-solid text-lg font-bold print:border-none"
              value={headerText}
              onChange={handleHeaderChange}
            />
          </div>
          <div className="grid grid-flow-col grid-cols-3 justify-items-stretch my-4 h-full">
            <div className="border-dashed border-2 border-gray-300 hover:border-cyan-700 rounded-md mr-2 p-2 print:border-none">
              <TaskList
                tasks={tasks.slice(0, totalRows)}
                hasAddButton={tasks.length < totalRows}
                onAddTask={addNewTask}
                onRemoveTask={removeTask}
                onUpdateTask={handleTaskChange}
              />
            </div>
            <div className="border-dashed border-2 border-gray-300 hover:border-cyan-700 rounded-md mx-2 p-2 print:border-none">
              <TaskList
                tasks={tasks.slice(totalRows, totalRows * 2)}
                hasAddButton={tasks.length >= totalRows && tasks.length < totalRows * 2}
                onAddTask={addNewTask}
                onRemoveTask={removeTask}
                onUpdateTask={handleTaskChange}
              />
            </div>
            <div className="border-dashed border-2 border-gray-300 hover:border-cyan-700 rounded-md ml-2 p-2 print:border-none">
              <TaskList
                tasks={tasks.slice(totalRows * 2, totalRows * 3)}
                hasAddButton={tasks.length >= totalRows * 2 && tasks.length < totalRows * 3}
                onAddTask={addNewTask}
                onRemoveTask={removeTask}
                onUpdateTask={handleTaskChange}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="flex gap-8 flex-wrap items-center justify-center mt-4 print:hidden">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
