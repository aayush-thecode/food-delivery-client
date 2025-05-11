/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/axios/api.axios'

export const forgotPassword = async(email: string) => {
    try {
        const response = await api.post('/user/forgot-password', { email });
        return response.data;
    } catch(error:any) {
        throw error?.response?.data;
    }
}