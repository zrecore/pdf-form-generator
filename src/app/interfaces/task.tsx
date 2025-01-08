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

export type {
    Task,
    NewTask
}