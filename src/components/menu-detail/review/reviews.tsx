import { getFoodReview } from '@/api/review.api'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import ReviewCard from './review-card'
import { IReviews } from '@/interface/review.interface'
import PageLoading from '@/components/ui/page-loading'

interface IProps {
  foodId: string
}

const Reviews: React.FC<IProps> = ({ foodId }) => {
  const [showAll, setShowAll] = useState(false)

  const { isLoading, data } = useQuery({
    queryKey: ['review', foodId],
    queryFn: () => getFoodReview(foodId)
  })

  if (isLoading) {
    return (
      <div>
        <PageLoading />
      </div>
    )
  }

  // Ensure reviewsToShow is always an array
  const reviewsToShow = showAll ? data?.data ?? [] : data?.data?.slice(0, 4) ?? []

  return (
    <div className="flex flex-col items-center mt-3">
      <div className="flex flex-wrap justify-center gap-4">
        {reviewsToShow.map((review: IReviews) => (
          <ReviewCard key={review?._id} review={review} />
        ))}
      </div>

      {data && data.data.length > 4 && (
        <button
          className="mt-4 text-orange-600 font-medium hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All Reviews'}
        </button>
      )}
    </div>
  )
}

export default Reviews
