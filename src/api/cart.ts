/* eslint-disable @typescript-eslint/no-explicit-any */

import api from '@/axios/api.axios'


export const addToCart = async(data:{foodId: string, quantity: number}) => {
    try 
    {
        const response = await api.post('/cart/add', data)
            return response.data;
    } 
    
    catch(error: any)
    {
        throw error.response.data;
    }
};