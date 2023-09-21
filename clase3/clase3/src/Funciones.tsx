import React from 'react'
import { PropsFunciones } from './PropsFunciones';

export default function Funciones() {
    const [nombre, setNombre] = React.useState<string>("Adrian");
    const [apellido, setApellido] = React.useState("Blanco");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value)
    }

    const handleChangeApellido = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApellido(event.target.value)
    }
    return (

        <>
            <h1>Hola, mi nombre es {nombre}</h1>
            <input type="text" value={nombre} onChange={handleChange} />
            <PropsFunciones apellido={apellido} />
            <h2>Y mi apellido es {apellido}</h2>
            <input type="text" value={apellido} onChange={handleChangeApellido} />
        </>

    );
}
