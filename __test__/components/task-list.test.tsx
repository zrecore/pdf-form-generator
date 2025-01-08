import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import TaskList from '../../src/app/components/taskList'
import { Task } from '@/app/interfaces/task'

describe(
    'components/taskList',
    () => {
        it(
            'Should add a task',
            () => {
                let taskIdCount = 1
                let tasks = [
                    {
                        id: 1,
                        title: 'Test 1',
                        description: 'Description of Test 1',
                        isComplete: false
                    } as Task
                ]

                const handleAddTask = () => {
                    ++taskIdCount 
                    tasks.push({
                        id: taskIdCount,
                        title: `Test ${taskIdCount}`,
                        description: `Description of Test ${taskIdCount}`,
                        isComplete: false
                    } as Task)
                }
                
                render(<TaskList tasks={tasks} hasAddButton={true} onAddTask={handleAddTask} />)
                
                const dom = screen.getByTestId('task-list')
                // Should have the task, and the "Add Button"
                expect(dom.childElementCount).toBe(2)
                
                const domAddButton = dom.children[1].children[0]

                // Has the first task only
                expect(tasks.length).toBe(1)

                fireEvent(domAddButton, new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true
                }))
                
                // Now should have a second task
                expect(tasks.length).toBe(2)
            }
        )

        it (
            'Should remove a task',
            () => {
                
                let tasks = [
                    {
                        id: 1,
                        title: 'Test 1',
                        description: 'Description of Test 1',
                        isComplete: false
                    } as Task
                ]
                const handleRemoveTask = (id:number) => {
                    tasks = tasks.filter((t:Task) => {
                        return t.id != id
                    })
                }

                render(<TaskList tasks={tasks} hasAddButton={true} onRemoveTask={handleRemoveTask} />)
                const dom = screen.getByTestId('task-list')
                const domRemoveButton = dom.children[0].getElementsByTagName('button').item(0)

                if (!domRemoveButton) fail('Could not find RemoveButton in TaskList task item')
                
                expect(tasks.length).toBe(1)

                fireEvent(domRemoveButton, new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true
                }))

                expect(tasks.length).toBe(0)
            }
        )

        it (
            'Should update a task',
            () => {
                let tasks = [
                    {
                        id: 1,
                        title: 'Test 1',
                        description: 'Description of Test 1',
                        isComplete: false
                    } as Task
                ]
                const handleUpdateTask = (updatedTask:Task) => {
                    tasks = tasks.map((t) => {
                        if (t.id == updatedTask.id)
                        {
                            t = updatedTask
                        }
                        return t
                    })
                }

                render(<TaskList tasks={tasks} hasAddButton={true} onUpdateTask={handleUpdateTask} />)
                const dom = screen.getByTestId('task-list')
                const domTaskListItemElem = dom.getElementsByClassName('editable-input')[0]
                
                fireEvent(domTaskListItemElem, new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true
                }))
                
                const domTaskListItemInput = screen.getByTestId('test-input')

                fireEvent.change(domTaskListItemInput, {
                    bubbles: true,
                    cancelable: true,
                    target: {value: "Updated Test 1"}
                })

                expect(tasks.length).toBe(1)
                expect(tasks[0].title).toBe("Updated Test 1")
            }
        )

        it(
            'Should change focus from current task item to next through handleOnReturn() event, ENTER key',
            () => {
                let tasks = [
                    {
                        id: 1,
                        title: 'Test 1',
                        description: 'Description of Test 1',
                        isComplete: false
                    } as Task,
                    {
                        id: 2,
                        title: 'Test 2',
                        description: 'Description of Test 2',
                        isComplete: false
                    } as Task
                ]
                let value = 0
                const handleOnReturn = (id:number) => {
                    value = id
                }

                render(<TaskList tasks={tasks} hasAddButton={true} onReturn={handleOnReturn} />)
                const dom = screen.getByTestId('task-list')
                const domTaskListItemElem = dom.getElementsByClassName('editable-input')[0]
                // Focus should go to the next task item
                fireEvent(domTaskListItemElem, new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true
                }))

                let domTaskListItemInput = dom.getElementsByClassName('edit-mode')[0]
                
                fireEvent.keyUp(domTaskListItemInput, {
                    key: 'Enter',
                    code: 'Enter'
                })

                expect(value).toBe(2)

                domTaskListItemInput = dom.getElementsByClassName('edit-mode')[0]
                
                fireEvent.keyUp(domTaskListItemInput, {
                    key: 'Enter',
                    code: 'Enter'
                })
                // It should cycle back to the first task item
                expect(value).toBe(1)
            }
        )

        it(
            'Should display the Add button',
            () => {
                let tasks:Array<Task> = []
                render(<TaskList tasks={tasks} hasAddButton={true} />)
                const dom = screen.getByTestId('add-button').parentElement
                expect(dom).toBeTruthy()
                expect(dom).not.toHaveClass('hidden')
            }
        )

        it(
            'Should hide the Add button',
            () => {
                let tasks:Array<Task> = []
                render(<TaskList tasks={tasks} hasAddButton={false} />)
                const dom = screen.getByTestId('add-button').parentElement
                expect(dom).toBeTruthy()
                expect(dom).toHaveClass('hidden')
            }
        )

        it(
            'Renders correctly, NO tasks, YES Add button',
            () => {
                let tasks:Array<Task> = []
                const { container } = render(<TaskList tasks={tasks} hasAddButton={true} />)
                expect(container).toMatchSnapshot()
            }
        )

        it(
            'Renders correctly, NO tasks, NO Add button',
            () => {
                let tasks:Array<Task> = []
                const { container } = render(<TaskList tasks={tasks} hasAddButton={false} />)
                expect(container).toMatchSnapshot()
            }
        )

        it(
            'Renders correctly, YES tasks, YES Add button',
            () => {
                let tasks:Array<Task> = [
                    {
                        id: 1,
                        title: 'Test 1',
                        description: 'Description of Test 1',
                        isComplete: false
                    } as Task,
                    {
                        id: 2,
                        title: 'Test 2',
                        description: 'Description of Test 2',
                        isComplete: false
                    } as Task
                ]
                const { container } = render(<TaskList tasks={tasks} hasAddButton={true} />)
                expect(container).toMatchSnapshot()
            }
        )

        it(
            'Renders correctly, YES tasks, NO Add button',
            () => {
                let tasks:Array<Task> = [
                    {
                        id: 1,
                        title: 'Test 1',
                        description: 'Description of Test 1',
                        isComplete: false
                    } as Task,
                    {
                        id: 2,
                        title: 'Test 2',
                        description: 'Description of Test 2',
                        isComplete: false
                    } as Task
                ]
                const { container } = render(<TaskList tasks={tasks} hasAddButton={false} />)
                expect(container).toMatchSnapshot()
            }
        )
    }
)