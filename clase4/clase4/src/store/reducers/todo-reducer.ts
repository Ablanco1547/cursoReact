import { IAction } from '../../models/IAction';
import { ITodo } from '../../models/ITodo';
import { ITodoReducer } from '../../models/ITodoReducer';
import { ADD_TODO, UPDATE_TODOS } from '../actions/'

const initialState: ITodoReducer = {
    todos: [],
};


export const todoReducer = (state = initialState, { type, payload }: IAction): ITodoReducer => {

    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload as ITodo],
            };
        case UPDATE_TODOS:
            return {
                ...state,
                todos: payload as ITodo[],
            };
        default:
            return state;
    }

};