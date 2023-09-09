import React, { Component } from 'react'

export class ListaEstudiantesClass extends Component {
    render() {

        const { listaEstudiantes } = this.props;

        return (
            <React.Fragment>

                <h1>CLASES</h1>
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
}
