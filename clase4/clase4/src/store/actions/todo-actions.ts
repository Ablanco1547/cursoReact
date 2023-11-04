import { ADD_TODO, UPDATE_TODOS } from ".";
import { ITodo } from "../../models/ITodo";
import axios from 'axios';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IState } from "../../models/IState";

export const addTodo = (payload: ITodo) => ({
    type: ADD_TODO,
    payload,
});

export const updateTodos = (payload: ITodo[]) => ({
    type: UPDATE_TODOS,
    payload,
});



export const traerTodos = () => {
    return async function (dispatch: ThunkDispatch<IState, null, AnyAction>) {

        try {
            const responseTodos = await axios.get("https://jsonplaceholder.typicode.com/todos");
            dispatch(updateTodos(responseTodos.data))
        } catch (error) {
            console.log(error);

        }

    }
}