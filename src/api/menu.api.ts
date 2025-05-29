/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/axios/api.axios";

export const getAllMenu = async() => {
    try {
        const response = await api.get('/menu')
        return response?.data

    } catch (error: any){
        throw error?.response?.data;
    }
}

export const getMenuByFoodId = async(id:string) =>{
    try{
        const response = await api.get(`/menu/${id}`)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}