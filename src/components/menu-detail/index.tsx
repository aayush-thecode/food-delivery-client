'use client'

import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ImageSlider from '../menu-detail/image-slider'
import ReviewForm from '../ui/review-form'
import Reviews from './review/reviews'
import { getMenuByFoodId } from '@/api/menu.api'
import PageLoading from '../ui/page-loading'

interface IProp {
  id: string
}

const FoodDetail: React.FC<IProp> = ({ id }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['get-food-by-id', id],
    queryFn: () => getMenuByFoodId(id),
  })

  useEffect(() => {
    if (isError) {
      toast.error(error?.message ?? 'Something went wrong')
    }
  }, [error, isError])

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-8.6rem)] w-full flex items-center justify-center">
        <PageLoading />
      </div>
    )
  }

  const food = data?.data

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-8 md:px-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Side: Image + Review Form */}
        <div className="flex flex-col gap-8">
          {/* Image Card */}
          <div className="w-full max-w-max mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
            <ImageSlider images={food?.images} />
          </div>

          {/* Review Form Card */}
          <div className="w-full bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Leave a Review
            </h2>
            <ReviewForm itemId={id} />
          </div>
        </div>

        {/* Right Side: Food Details */}
        <div className="w-full bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {food?.name ? capitalizeFirstLetter(food.name) : ''}
          </h1>

          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            {food?.description}
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-green-600">
              रु. {parseInt(food?.price).toLocaleString()}
            </span>
          </div>

          <button className="bg-green-500 text-white text-lg font-medium px-8 py-3 rounded-xl hover:bg-green-600 transition duration-300 mb-8 w-full md:w-auto">
            Add to Cart
          </button>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <Reviews itemId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodDetail
