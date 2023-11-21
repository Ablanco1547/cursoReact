//Para ponerle tipo a los datos de un componente
//se pone entre <>  despues del useStatee y antes de los parentesis



export default function repaso() {
    const [nombre, setNombre] = React.useState<string | boolean>("Adrian")

    return (
        <div>Hola mi nombre es: { nombre } </div>
  )
}

//Para ponerle tipo de dato a un parametro seria: 

const handlechange = (event: number) => {
    console.log(algo)
}


//Cuando en una funcion no se sabe que tipo de elemento retorna
//Podemos cambiar el llamado de la funcion, cambiarlo por event ponerle una flecha y pararse encima a ver el tipo de dato

//Para typescript no necesitamos propTypes, se usa un tipo a la expresion de funcion
//Si se reciben props, no se usan funciones como tal, se usan arrow functions
//TODOS LOS COMPONENTES TIENEN QUE EMPEZAR CON MAYUSCULA




//Como CREAR UN APP DE NEXT

//npx create-next-app@latest --ts