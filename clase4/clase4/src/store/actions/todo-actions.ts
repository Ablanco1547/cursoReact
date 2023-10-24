import { ADD_TODO, UPDATE_TODO } from ".";

export const addTodo = (payload : any) => ({
    type: ADD_TODO,
    payload,
});

export const updateTodos = (payload : any) => ({
    type: UPDATE_TODO,
    payload,
});
