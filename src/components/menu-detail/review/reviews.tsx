import { getFoodReview} from '@/api/review.api'
 import { useQuery } from '@tanstack/react-query'
 import React from 'react'
 import ReviewCard from './review-card'
 import { IReviews } from '@/interface/review.interface'
import PageLoading from '@/components/ui/page-loading'
 
 
 interface IProps {
     itemId:string
 }
 
 
 const Reviews:React.FC<IProps> = ({itemId}) => {
 
     const {isLoading,data} = useQuery({
         queryKey:['reviews'],
         queryFn:() => getFoodReview(itemId)
     })
 
     if(isLoading){
         return <div ><PageLoading/></div>
     }
     
   return (
    
     <div className='flex flex-wrap justify-center gap-4 mt-3 '>
         {
             data?.data?.map((review:IReviews) => <ReviewCard key={review?._id} review={review} />)
         }
     </div>
   )
 }
 
 export default Reviews