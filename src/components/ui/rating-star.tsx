/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { StarRating } from 'react-flexible-star-rating';
import React ,{useEffect}from "react";
 
interface IProp {
    rating:number
    onChange?:(_: any, value: any)=>void
    edit?:boolean
}
 
export const RatingStar:React.FC<IProp> = ({rating,edit=false,onChange}) => {

    useEffect(()=>{
        console.log('render',rating)
    },[rating])


   

    return(
      
        <div className='flex'>
            <StarRating 
            isReadOnly={!edit} 
            dimension={8} 
            initialRating={rating ?? 0} 
            isHalfRatingEnabled
            onRatingChange={(newRating) => onChange && onChange(null,newRating)} />
        </div>
           
       
      );
}