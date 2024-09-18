import { useState } from 'react';

export default function NewTask({ handleAddTask, projectId }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        }
        handleAddTask(enteredTask, projectId);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-4 py-2 rounded-sm bg-stone-200"
                onChange={(e) => setEnteredTask(e.target.value)}
                value={enteredTask}
            />
            <button
                className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-50"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}