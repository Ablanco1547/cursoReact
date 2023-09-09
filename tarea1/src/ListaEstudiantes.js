import React from 'react'

export const ListaEstudiantes = ({ listaEstudiantes }) => {
    return (
        <React.Fragment>

            <h1>FUNCIONES</h1>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Edad</td>
                    </tr>
                </thead>
                <tbody>

                    {listaEstudiantes.map((estudiante) => (

                        <tr key={estudiante.nombre}>
                            <td >{estudiante.nombre}</td>
                            <td >{estudiante.apellido}</td>
                            <td >{estudiante.edad}</td>
                        </tr>


                    ))}
                </tbody>

            </table>



        </React.Fragment>
    )
}
