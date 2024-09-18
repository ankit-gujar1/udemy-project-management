import React from 'react'
import Tasks from './Tasks';

const SelectedProject = ({ project, handleDeleteProject, handleDeleteTask, handleAddTask, tasks }) => {
    const formattedDate = new Date(project.due).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="w-[35rem] mt-16 px-10">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {project.name}
                    </h1>
                    <button onClick={()=>handleDeleteProject(project.id)} className="text-stone-700 hover:text-red-500 outline outline-offset-2 outline-stone-700 hover:outline-red-500 rounded-md px-2 py-1">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">
                    {project.description}
                </p>
            </header>
            <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} handleAddTask={handleAddTask} projectId={project.id}/>
        </div>
    );
}

export default SelectedProject