import React from 'react';
import axios from 'axios';
import { ListaPublicaciones } from '../molecules/ListaPublicaciones';
import { IPost } from '../../models/IPosts';
import { IUser } from '../../models/IUsers';
import { IComment } from '../../models/IComment';

export const ListaPublicacionesWrapper = () => {

    const [publicaciones, setPublicaciones] = React.useState<IPost[]>([]);
    const [cargando, setCargando] = React.useState(true);

    const traerPublicaciones = async () => {
        try {
            //Hacemos las 3 peticiones de un solo, durando solo lo que dura el mas lento en llegar
            const [posts, comentarios, usuarios] = await Promise.all([
                axios.get("https://jsonplaceholder.typicode.com/posts"),
                axios.get("https://jsonplaceholder.typicode.com/comments"),
                axios.get("https://jsonplaceholder.typicode.com/users")

            ]);
            const publicacionesConAutoresYComentarios = (posts.data as IPost[]).map((publicacion) => {
                const autorPublicacion = (usuarios.data as IUser[]).find(usuario => usuario.id === publicacion.userId);


                const comentariosDePublicacion = (comentarios.data as IComment[]).filter((comentario) => comentario.postId === publicacion.id)


                return {
                    ...publicacion,
                    autor: autorPublicacion,
                    comentarios: comentariosDePublicacion
                }

            })


            setPublicaciones(publicacionesConAutoresYComentarios);
            setCargando(false);
        } catch (error) {
            console.error(error)
        }

    }

    //componentDidMount
    React.useEffect(() => {
        traerPublicaciones();
    }, []);


    if (cargando) {
        return <p>Cargando...</p>
    }
    return (
        <>

            {/*IF CARGANDO == TRUE <p>Cargando...</p> else <ListaPublicaciones publicaciones = {publicaciones}/>
            
            cargando ? (<p>Cargando...</p>) : (<ListaPublicaciones publicaciones={publicaciones} />)
            */}

            <ListaPublicaciones publicaciones={publicaciones} />

        </>
    )
}