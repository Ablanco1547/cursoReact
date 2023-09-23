import React from 'react'

//interface representa un objeto
interface IPropsFuncionesProps {
    apellido: string;

}
//ASI SE TIPAN LOS ARROW FUNCTIONS 

export const PropsFunciones: React.FC<IPropsFuncionesProps> = (props) => {
    return (
        <>
            <p>{props.apellido}</p>
        </>
    )
}
