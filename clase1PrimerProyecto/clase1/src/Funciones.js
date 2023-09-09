import React from 'react'
import PropsFunciones from './PropsFunciones';

export default function Funciones() {
  const [nombre, setNombre] = React.useState('Adrian');
  const [apellido, setApellido] = React.useState('Blanco');



  //Como el use effect se le pasa un arreglo vacio se comporta como did mount
  React.useEffect(() => {
    console.log('did mount')
    setTimeout(() => {
      setNombre("Juan");
      setApellido("Perez");
    }, 3000)

  }, [])

  //EL DID UPDATE
  React.useEffect(() => {
    console.log("Did update")
    console.log(nombre)

  }, [nombre])


  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };


  //Esto no tiene "Render entonces antes del return es el render
  console.log("Render")
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
