/* eslint-disable @typescript-eslint/no-explicit-any */


import api from "@/axios/api.axios";

interface IReview {
    userId:string;
    rating:number;
    review:string;
    foodTypeId:string;
}

export const postReview = async(data:IReview) =>{
    try{
        const response = await api.post(`/review`,data)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getFoodReview = async(foodId:string) =>{
    try{
        const response = await api.get(`/review/menu/${foodId}`)
        return response?.data;

    }catch(error:any){
        throw error?.response?.data; 
    }
}
