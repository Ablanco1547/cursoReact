import React from 'react'
import PropsFunciones from './PropsFunciones';

export default function Funciones() {
  const [nombre, setNombre] = React.useState('Adrian');
  const [apellido, setApellido] = React.useState('Blanco');




  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  return (
    <div>
      <h1>Hola, mi nombre es {nombre}</h1>
      {/*asdasd*/}
      <input type="text" value={nombre} onChange={handleChange} />
      <PropsFunciones apellido={apellido} />
      <input type="text" value={apellido} onChange={handleChangeApellido} />

    </div>

  )
}
