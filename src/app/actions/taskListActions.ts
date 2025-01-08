import { revalidatePath } from "next/cache"
import { useState } from "react"

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

  async function loadTasks()
  {
    return []
  }

  async function saveTasks(tasks:(Task|NewTask)[])
  {
    return true;
  }


  export {
    loadTasks, saveTasks, 
  }