
import React from 'react'
import { RatingStar } from '@/components/ui/rating-star';

interface IProp{
    name: string,
    rating: number
}

const FoodTitle: React.FC<IProp> = ({name, rating}) => {
  return (

    <div className='flex items-center gap-10 mt-4'>
    <p className='tracking-wider  font-bold text-3xl'>{name}</p>
    <div className='flex gap-2 items-center font-bold ml-[-25px] font-[times]'>
        <RatingStar rating={Math.ceil(rating)} />
        <p className='tracking-wider text-sm text-gray-500'>({rating})</p>
    </div>
    </div>
        
  )
}

export default FoodTitle;