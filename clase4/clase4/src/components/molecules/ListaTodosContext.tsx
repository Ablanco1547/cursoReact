import React from "react";
import { useEjemploContext } from "../../contexts/Ejemplo";
import { ITodo } from "../../models/ITodo";

export const ListaTodosContext = () => {
	const { todos, loading, setTodos, agregarTodo } = useEjemploContext();
	console.log(todos);

	if (loading) return <p>Cargando...</p>;

	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			agregarTodo(e.currentTarget.value);
			e.currentTarget.value = "";
		}
	};

	return (
		<>
			<input
				type="text"
				onKeyDown={handleEnter}
				placeholder="Ingrese un nuevo todo"
			/>
			<ul>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.title}</li>;
				})}
			</ul>
		</>
	);
};
