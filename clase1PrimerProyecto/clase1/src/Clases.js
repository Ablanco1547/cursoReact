import React from 'react';
import PropsClases from './PropsClases';

export default class Clases extends React.Component {


    constructor() {
        super()
        this.state = {
            nombre: "Adrian",
            apellido: "Blanco",
            edad: 29,
            lista: []
        };
    }


    //tambien se puede poner onChange
    handleChange(event) {
        this.setState({ nombre: event.target.value });
    }
    handleChangeApellido(event) {
        this.setState({ apellido: event.target.value });
    }



    render() {
        return (
            <div>
                <h1>Hola, mi nombre es {this.state.nombre}</h1>
                <input type="text" value={this.state.nombre} onChange={(e) => this.handleChange(e)} />
                <PropsClases apellido={this.state.apellido} />
                <input type='text' value={this.state.apellido} onChange={(e) => this.handleChangeApellido(e)} />
            </div>
        )
    }

}