import React from "react";
import { ITodo } from "../models/ITodo";
import { IUser } from "../models/IUser";
import axios from "axios";

export interface EjemploContextProps {
	todos: ITodo[];
	users: IUser[];
	loading: boolean;

	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
	setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
	setLoading: React.Dispatch<React.SetStateAction<boolean>>

	agregarTodo: (title: string) => void;


	toggleTodoCompleted: (newValue: boolean, todoId: number) => void;


}

//VALORES POR DEFECTO
const EjemploContext = React.createContext<EjemploContextProps>({
	todos: [],
	users: [],
	loading: false,
	setTodos: () => { },
	setUsers: () => { },
	setLoading: () => { },

	agregarTodo: () => { },

	toggleTodoCompleted: () => { },

});


//A todos los contextos se les pone provider en el n ombre


export const EjemploContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

	const [todos, setTodos] = React.useState<ITodo[]>([]);
	const [users, setUsers] = React.useState<IUser[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);

	const traerTodos = React.useCallback(async () => {
		try {

			setLoading(true);

			const response = await axios.get("https://jsonplaceholder.typicode.com/todos")

			setTodos(response.data)

			setLoading(false);

		} catch (error) {
			console.error(error);
		}

	}, [])

	const agregarTodo = React.useCallback((title: string) => {

		const newTodo: ITodo = {
			id: Math.random(),
			title,
			completed: false,
		};

		const newTodos = [newTodo, ...todos];
		setTodos(newTodos);


	}, [todos]);

	const toggleTodoCompleted = React.useCallback((newValue: boolean, todoId: number) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === todoId) {
				return {
					...todo,
					completed: newValue,
				};
			}
			return todo
		});

		setTodos(newTodos);

	}, [todos])

	React.useEffect(() => {

		traerTodos();

	}, [traerTodos])




	const contextValue = React.useMemo(
		() => ({
			todos, users, setTodos, setUsers, loading, setLoading, agregarTodo, toggleTodoCompleted,
		}),
		[todos, users, setTodos, setUsers, loading, setLoading, agregarTodo, toggleTodoCompleted,]);




	return <EjemploContext.Provider value={contextValue}>

		{children}

	</EjemploContext.Provider>
};



//Si exportamos desde aqui es mas facil de leer en todas las situaciones la otra opcion sera el React.useContext(NombreDelContext) pero se complica mucho entonces no


export const useEjemploContext = () => React.useContext<EjemploContextProps>(EjemploContext);



