import React, { createContext, useReducer, useContext, useEffect } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.payload ? { ...task, done: !task.done } : task
            );
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'LOAD_TASKS':
            return action.payload || [];
        default:
            return state;
    }
};


export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    // Load tasks from LocalStorage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            dispatch({ type: 'LOAD_TASKS', payload: storedTasks });
        }
    }, []);

    // Save tasks to LocalStorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);