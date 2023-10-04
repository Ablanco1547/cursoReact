import { IAlbum } from "../../models/IAlbum";
import React from 'react';
import { Album } from "./Album";



export interface IListaAlbumesProps {
    albumes: IAlbum[];
}



export const ListaAlbumes: React.FC<IListaAlbumesProps> = ({ albumes }) => {
    return (


        <ul>
            {albumes.map((album) => <Album key={album.id} album={album} />)}
        </ul>
    )
}
