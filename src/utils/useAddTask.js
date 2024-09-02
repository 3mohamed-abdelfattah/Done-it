import { useTasks } from "@/context/TaskContext";

export const useAddTask = () => {
    const { dispatch } = useTasks();

    const addTask = (text) => {
        const links = text.match(/(https?:\/\/[^\s]+)/g) || [];
        const newTask = {
            id: Date.now(),
            text: text.replace(/(https?:\/\/[^\s]+)/g, "<a href='$1'>$1</a>"),
            done: false,
            links
        };
        dispatch({ type: 'ADD_TASK', payload: newTask });
    };

    return addTask;
};