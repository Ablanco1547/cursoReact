import React from "react";
import { ITodo } from "../models/ITodo";
import { IUser } from "../models/IUser";
import axios from "axios";




//INTERFACE CON TIPOS (ABSTRACCION)
export interface EjemploContextProps {
    todos: ITodo[];
    users: IUser[];
    loading: boolean;

    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

}

//VALORES POR DEFECTO
const EjemploContext = React.createContext<EjemploContextProps>({
    todos: [],
    users: [],
    loading: false,
    setTodos: () => { },
    setUsers: () => { },
    setLoading: () => { },
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

    React.useEffect(() => {

        traerTodos();

    }, [traerTodos])




    const contextValue = React.useMemo(() => ({ todos, users, setTodos, setUsers, loading, setLoading }), [todos, users, setTodos, setUsers, loading, setLoading]);




    return <EjemploContext.Provider value={contextValue}>

        {children}

    </EjemploContext.Provider>
};



//Si exportamos desde aqui es mas facil de leer en todas las situaciones la otra opcion sera el React.useContext(NombreDelContext) pero se complica mucho entonces no


export const useEjemploContext = () => React.useContext<EjemploContextProps>(EjemploContext);



