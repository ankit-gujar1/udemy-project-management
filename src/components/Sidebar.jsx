import React from 'react'

const Sidebar = ({ handleAddProjectButton, projects, handleSelectProject, selectedProjectId }) => {
    return (
        <div className='w-1/3 bg-black text-white py-8 px-8 md:w-72 rounded-r-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl font-bold text-white mb-4'>Your Projects</h1>
                <button onClick={handleAddProjectButton} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-50'>Add Project</button>
            </div>
            <div className='my-8'>
                {projects.map((i) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

                    if (i.id === selectedProjectId) {
                        cssClasses += ' bg-stone-800 text-stone-200'
                    } else {
                        cssClasses += ' text-stone-400'
                    }
                    return (
                        <div key={i.id} className=''>
                            <button onClick={() => handleSelectProject(i.id)} className={cssClasses}>{i.name}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar