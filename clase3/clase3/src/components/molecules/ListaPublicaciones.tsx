import React from 'react'
import { IPost } from '../../models/IPosts';
import { Publicacion } from './Publicacion';

export interface IListaPublicacionesProps {
    publicaciones: IPost[];
}

export const ListaPublicaciones: React.FC<IListaPublicacionesProps> = ({ publicaciones }) => {
    return (
        <ul>

            {publicaciones.map((publicacion) => <Publicacion key={`${publicacion.id}`} post={publicacion} />)}

        </ul>
    )
}
