//LAS INTERFACES SON COMO LOS MODELOS DE LOS OBJETOS, POR EJEMPLO LOS DTOS DONDE HACEMOS EL OBJETO PADRE CON LOS TIPOS

import { IComment } from "./IComment";
import { IUser } from "./IUsers";


export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    autor?: IUser;
    comentarios?: IComment[];

}




