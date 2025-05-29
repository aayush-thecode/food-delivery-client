
export interface IImage {
    publicId: string,
    path: string,
}

export interface IFood {
    _id:string;
    name:string;
    coverImage:IImage;
    images?:IImage[];
    averageRating:number;
    price:string;
    description?:string;
}