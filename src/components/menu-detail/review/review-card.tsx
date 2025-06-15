import { IReviews } from '@/interface/review.interface'
import React from 'react'
import { RatingStar } from '@/components/ui/rating-star'

interface IProps {
  review: IReviews
}

const ReviewCard: React.FC<IProps> = ({ review }) => {
  const { user, rating, review: comment } = review

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-[420px] transition hover:shadow-lg">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-orange-600 border border-orange-400">
          {user.firstName.charAt(0)}
        </div>

        {/* Name + Rating + Comment */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-gray-800">
              {`${user.firstName} ${user.lastName}`}
            </h3>
            <RatingStar rating={rating ?? 0.5} />
          </div>

          <p className="text-sm text-gray-700">{comment}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
