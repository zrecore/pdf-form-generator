"use client"

import Image from "next/image";
import AddButton from "./components/addButton";
import RemoveButton from "./components/removeButton";
import { useState } from "react";
import PhotoButton from "./components/photoButton";
import PrintButton from "./components/printButton";
import EditableInput from "./components/editableInput";
import { revalidate } from "./actions/serverActions";


export default function Home() {
  
  interface Task
  {
    id:number,
    title:string,
    description:string,
    isComplete:boolean,
    createdAt:string,
    updatedAt:string
  }

  interface NewTask
  {
    id:number,
    title:string,
    description:string,
    isComplete:boolean
  }

  const savedTasks:(Task|NewTask)[] = loadTasks()
  const [tasks, setTasks] = useState(savedTasks)
  const [headerText, setHeaderText] = useState("Default Heading Text")
  const [totalColumns, setTotalColumns] = useState(3)

  const [tempId, setTempId] = useState(1)

  function loadTasks()
  {
    return []
  }

  function addNewTask()
  {
    console.log("ADD NEW TASK")
    const newTask: NewTask = {
      id: tempId,
      title: "(New Task)",
      description: "(Description)",
      isComplete: false
    }
    tasks.push(newTask)
    setTasks(tasks)
    setTempId(tempId + 1)
    console.log(tasks)

    revalidate("/")
  }

  function removeTask(id:number)
  {
    console.log("REMOVE TASK")
    
    setTasks(
      tasks.filter((t:Task|NewTask) => {
        return t.id != id
      })
    )
    revalidate("/")
  }

  function handleHeaderChange(newValue:string)
  {
    console.log("Header text is:", newValue)
    setHeaderText(newValue)
  }

  function handleTaskTitleChange(taskId:number, newValue:string)
  {
    console.log("Task Ttle for ID", taskId, " is:", newValue)
    setTasks(tasks.map((t) => {
      if (t.id == taskId)
      {
        t.title = newValue
      }
      return t
    }))
  }

  function handleTotalColumnsUpdate(newValue:number)
  {
    setTotalColumns(newValue)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <main className="flex flex-col gap-4 items-center sm:items-start">
      <h1 className="font-semibold text-gray-600 text-lg p-4 m-0">List</h1>
        <div className="grid grid-flow-col justify-start align-middle space-x-4 w-full border border-solid border-slate-700 text-white bg-slate-600 font-semibold border-1 drop-shadow-lg p-4">
          <div>Columns: <input type="number" value={totalColumns} onChange={e => handleTotalColumnsUpdate(parseInt(e.target.value))} /></div>
          <PhotoButton />
          <PrintButton />
        </div>
        <div className="paper-legal border border-solid border-gray-200 border-1 drop-shadow-lg px-[0.5in] py-[0.5in] flex flex-col">
          <div className="editable-header border-dashed border-2 border-cyan-500 rounded-md row-span-1 p-2 text-lg"><EditableInput value={headerText} onChange={handleHeaderChange}></EditableInput></div>
          <div className="grid grid-flow-col justify-items-stretch my-4 h-full">
            <div className="border-dashed border-2 border-cyan-500 rounded-md mr-2 p-2">
              <div>
                  {tasks.map((task:Task|NewTask) => {

                    return <div key={task.id} className="flex flex-row">
                      <EditableInput className="font-semibold text-xl" value={ task.title } onChange={(newValue:string) => {handleTaskTitleChange(task.id, newValue)}}></EditableInput>
                      <RemoveButton onClick={() => { removeTask(task.id) }}/>
                    </div>
                  })}
                <AddButton onClick={addNewTask} />
              </div>
            </div>
            <div className="border-dashed border-2 border-cyan-500 rounded-md mx-2 p-2">2</div>
            <div className="border-dashed border-2 border-cyan-500 rounded-md ml-2 p-2">3</div>
          </div>
        </div>
      </main>
      <footer className="flex gap-8 flex-wrap items-center justify-center mt-4">
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
