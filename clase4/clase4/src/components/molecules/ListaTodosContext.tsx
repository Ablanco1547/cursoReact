import React from "react";
import { useEjemploContext } from "../../contexts/Ejemplo";
import { ITodo } from "../../models/ITodo";
import React from 'react'
import { useEjemploContext } from '../../contexts/Ejemplo'
import { Todo } from './Todo';

export const ListaTodosContext = () => {
    const { todos, loading, agregarTodo } = useEjemploContext();
    console.log(todos);


    if (loading) return <p>Cargando...</p>

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {

            agregarTodo(e.currentTarget.value);

            e.currentTarget.value = "";
        }
    }

    return (
        <>
            <input type="text" onKeyDown={handleEnter} />
            <ul>
                {todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo}></Todo>



                })}



            </ul >
        </>
    )
};