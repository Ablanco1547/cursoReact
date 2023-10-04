import React from 'react'
import { IAlbum } from '../../models/IAlbum';
import { Photo } from './Photo';

interface IAlbumProps {
    album: IAlbum;
}
export const Album: React.FC<IAlbumProps> = ({ album }) => {

    const renderPhotos = () => {
        if (!album.photos || album.photos.length === 0) {
            return null
        }
        return (
            <ul>
                {album.photos.map((photo) => {
                    return <Photo key={photo.id} photo={photo}></Photo>
                })}
            </ul>
        )
    }

    return (
        <li>
            <p> # {album.id}</p>
            <p>Usuario: {album.user?.name}</p>
            <p>Titulo: {album.title}</p>
            {renderPhotos()}
        </li>
    )
}

