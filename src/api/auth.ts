import api from '@/axios/api.axios'
import { ILogin, ISignUp } from '@/interface/auth-interface';

export const login = async(data: ILogin) => {
    const response = await api.post('/user/login', data);
    console.log(response);
    return response.data;
}

export const signup = async(data: ISignUp) => {
    const response = await api.post('/user/', {...data, gender:data.gender?.value});
    console.log(response);
    return response.data;
}