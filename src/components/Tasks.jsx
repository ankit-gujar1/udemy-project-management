import React from 'react'
import NewTask from './NewTask'

const Tasks = ({ tasks, handleDeleteTask, handleAddTask, projectId }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask handleAddTask={handleAddTask} projectId={projectId} />
            {tasks.length === 0 && (
                <p className="text-stone-800 my-4">
                    This project does not have any tasks yet.
                </p>
            )}
            {tasks.length > 0 && (
                <ul className="rounded-md">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-center my-4 bg-stone-100 rounded-md px-4 py-3">
                            <span>{task.text}</span>
                            <button
                                className="text-stone-700 hover:text-red-500 outline outline-offset-2 outline-stone-700 hover:outline-red-500 rounded-md px-2 py-1"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default Tasks