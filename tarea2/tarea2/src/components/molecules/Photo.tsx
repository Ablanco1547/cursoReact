import { IPhoto } from "../../models/IPhoto";
import React from 'react'

interface IPhotoProps {
    photo: IPhoto;
}



export const Photo: React.FC<IPhotoProps> = ({ photo }) => {
    return (
        <li>
            <p>{photo.title}</p>
            <img src={photo.url} alt={photo.title} />
        </li>
    )
}
