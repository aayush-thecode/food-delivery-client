

import FoodDetail from '@/components/menu-detail'
import React from 'react'

interface IProps {
    params:Promise<{
        id:string
    }>
}

const Page:React.FC<IProps> = async ({params}) =>{
    const {id} = await params

    
    return (
        <div className="w-full lg:max-w-[1440px] lg:mx-auto">
           <FoodDetail id={id} 
           />
        </div>
    )
}

export default Page;