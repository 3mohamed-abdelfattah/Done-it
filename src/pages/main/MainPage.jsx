import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { AddIcon, DeleteIcon, HeaderLogo } from "@/utils/icon.util"
import { useAddTask } from "@/utils/useAddTask";

export const MainPage = () => {
    const { tasks, dispatch } = useTasks();
    const addTask = useAddTask();
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    const handleDeleteTask = (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    };

    const toggleTaskDone = (id) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    return (
        <div className="flex flex-col items-center min-h-screen">

            <header className="flex flex-row items-center justify-center gap-3 font-black text-[40px]/[48.41px] bg-[#0D0D0D] w-full h-52 relative">
                <HeaderLogo />
                <p className="text-[#5E60CE]">
                    <span className="text-secondary">to</span>
                    do
                </p>
                {/* SearchBar */}
                <div className="flex absolute -bottom-7 gap-2 w-[763px]">
                    <input
                        className='text-base font-normal text-[#808080] bg-[#262626] p-4 rounded-lg border border-[#0D0D0D] w-full' type="text"
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        placeholder="Write your note and press “Enter” ..."
                    />
                    <button
                        className="text-sm bg-[#1E6F9F] text-primary/[19.6px] p-4 rounded-lg"
                        onClick={handleAddTask}
                    >
                        <span className="flex gap-2 items-center font-bold">
                            Add
                            <AddIcon />
                        </span>
                    </button>
                </div>
            </header>

            <main className="mt-16 w-[763px] items-center">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center justify-center">
                        <span className="text-secondary text-sm font-bold">Tasks</span>
                        <span className="py-[2px] px-2 bg-[#333333] w-6 h-5 text-xs font-bold rounded-xl">{tasks.length}</span>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <span className="text-[#8284FA] text-sm font-bold">Done</span>
                        <span className="py-[2px] px-2 bg-[#333333] w-fit h-5 text-xs font-bold rounded-xl">
                            {tasks.filter(task => task.done).length} of {tasks.length}
                        </span>
                    </div>
                </div>
                <section className="mt-6">
                    {tasks.map(task => (
                        <div
                            key={task.id}
                            className={`task ${task.done ? 'done' : ''} bg-[#262626] border border-[#333333] p-4 rounded-lg mb-3`}
                        >
                            <div className="flex gap-3 justify-between">
                                <div className="flex gap-3">
                                    <input
                                        type="checkbox"
                                        checked={task.done}
                                        onChange={() => toggleTaskDone(task.id)}
                                    />
                                    <span
                                        className={`text-sm ${task.done ? 'line-through text-[#808080]' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: task.text }}
                                    />
                                </div>
                                <span className='cursor-pointer text-[#808080] hover:text-red-600' onClick={() => handleDeleteTask(task.id)} >
                                    <DeleteIcon />
                                </span>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}