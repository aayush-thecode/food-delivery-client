/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext,ReactNode,useState,useContext, useEffect } from 'react';
import Cookies from 'js-cookie'


export const AuthContext = createContext<any>(null)


const AuthProvider = ({children}:{children:ReactNode}) =>{
    const [isAuthenticated,setIsAuthenticated] = useState(() => !!Cookies.get('access_token'))
    const [user,setUser] = useState(null)

    useEffect(() =>{
        const localUser = localStorage.getItem('user')
        if(localUser && !user) {
            setUser(()=>JSON.parse(localUser))
        }
        setIsAuthenticated(() => !!Cookies.get('access_token'))
    },[user])

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        Cookies.remove('access_token')
        setIsAuthenticated(false)

    }

    

    return (
        <AuthContext.Provider value={{isAuthenticated,setUser,user,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider


export const useAuth =() =>{

    if(!AuthContext){
        console.log('useAuth must be used inside Auth provider')
    }
    return useContext(AuthContext)
}
