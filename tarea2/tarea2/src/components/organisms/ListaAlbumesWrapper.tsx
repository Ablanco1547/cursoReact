import axios from 'axios';
import React from 'react'
import { IAlbum } from '../../models/IAlbum'
import { IUser } from '../../models/IUser';
import { IPhoto } from '../../models/IPhoto';
import { ListaAlbumes } from '../molecules/ListaAlbumes';

export const ListaAlbumesWrapper = () => {
    const [albumes, setAlbumes] = React.useState<IAlbum[]>([]);
    const [cargando, setCargando] = React.useState(true);


    const traerAlbumes = async () => {
        try {
            const [albumes, fotos, usuarios] = await Promise.all([
                axios.get("https://jsonplaceholder.typicode.com/albums"),
                axios.get("https://jsonplaceholder.typicode.com/photos"),
                axios.get("https://jsonplaceholder.typicode.com/users")
            ])
            const albumesConFotosYUsuarios = (albumes.data as IAlbum[]).map((album) => {
                const usuarioAlbum = (usuarios.data as IUser[]).find(usuario => usuario.id === album.userId);

                const fotosAlbum = (fotos.data as IPhoto[]).filter((foto) => album.id === foto.albumId);

                return {
                    ...album,
                    user: usuarioAlbum,
                    photos: fotosAlbum
                }
            })
            setAlbumes(albumesConFotosYUsuarios);
            setCargando(false);
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        traerAlbumes();
    }, []);


    if (cargando) {
        return <h2>CARGANDO.....</h2>
    }

    return (
        <>

            <ListaAlbumes albumes={albumes} />
        </>
    )
}
