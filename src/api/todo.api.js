import api from ".";

export const getTodo = async () => {
    try {
        const response = await api().get('/todo');
        return response.data;
    } catch (error) {
        return error
    }
}

export const createTodo = async (todoText, userId) => {
    try {
        const response = await api().post('/todo', { todo: todoText, userId });
        return response.data;
    } catch (error) {
        return error
    }
}

export const updateTodo = async (todoId, data) => {
    try {
        const response = await api().post(`/todo/${todoId}`, data);
        return response.data;
    } catch (error) {
        return error
    }
}

export const deleteTodo = async (todoId) => {
    try {
        const response = await api().delete(`/todo/${todoId}`);
        return response.data;
    } catch (error) {
        return error
    }
}