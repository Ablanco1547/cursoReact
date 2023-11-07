import React from 'react'
import { useEjemploContext } from '../../contexts/Ejemplo'
import { ITodo } from '../../models/ITodo';

export const ListaTodosContext = () => {
    const { todos, loading, setTodos } = useEjemploContext();
    console.log(todos);


    if (loading) return <p>Cargando...</p>

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const newTodo: ITodo = {
                id: Math.random(),
                title: e.currentTarget.value,
                completed: false
            }

            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);

            e.currentTarget.value = ""
        }
    }

    return (
        <>
            <input type="text" onKeyDown={handleEnter} />
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>



                })}



            </ul>
        </>
    )
};
