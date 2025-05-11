/* eslint-disable @typescript-eslint/no-explicit-any */


export interface IReview {
    rating: number;
    review: string;
}

export interface IReviews{
    _id:string;
    user:any,
    rating:number,
    review:string
}