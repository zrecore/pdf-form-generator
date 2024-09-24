"use client"

import Image from "next/image";
import AddButton from "./components/addButton";
import RemoveButton from "./components/removeButton";
import { useState } from "react";
import PhotoButton from "./components/photoButton";
import PrintButton from "./components/printButton";


export default function Home() {
  
  interface Task
  {

  }

  interface NewTask
  {

  }

  const savedTasks:(Task|NewTask)[] = loadTasks()
  const [tasks, setTasks] = useState(savedTasks)
  const [headerText, setHeaderText] = useState("Default Heading Text")
  const [totalColumns, setTotalColumns] = useState(3)

  function loadTasks()
  {
    return []
  }

  function updateTask(task:Task|NewTask)
  {
    console.log('Update task', task)
    // TODO: find the task and update it.
    setTasks([tasks])
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
          <div className="editable-header border-dashed border-2 border-cyan-500 rounded-md row-span-1 p-2">{headerText}</div>
          <div className="grid grid-flow-col justify-items-stretch my-4 h-full">
            <div className="border-dashed border-2 border-cyan-500 rounded-md mr-2 p-2">
              <div>
                <AddButton /><RemoveButton />
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
