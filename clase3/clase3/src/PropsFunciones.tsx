import React from 'react'

//interface representa un objeto
interface IPropsFuncionesProps {
    apellido: string;

}

export const PropsFunciones = ({ apellido }: IPropsFuncionesProps) => {
    return (
        <>
            <p>{apellido}</p>
        </>
    )
}
