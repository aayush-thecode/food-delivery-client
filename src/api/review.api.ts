/* eslint-disable @typescript-eslint/no-explicit-any */


import api from "@/axios/api.axios";

interface IReview {
rating:number,
review:string,
foodId:string
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
        const response = await api.get(`/review/${foodId}`)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}