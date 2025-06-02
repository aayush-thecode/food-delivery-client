'use client';

import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import ImageSlider from '../menu-detail/image-slider';
import ReviewForm from '../ui/review-form';
import Reviews from './review/reviews';
import { getMenuByFoodId } from '@/api/menu.api';
import PageLoading from '../ui/page-loading';

interface IProp {
  id: string;
}

const FoodDetail: React.FC<IProp> = ({ id }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['get-food-by-id', id],
    queryFn: () => getMenuByFoodId(id),
  });

  useEffect(() => {
    if (isError) {
      toast.error(error?.message ?? 'Something went wrong');
    }
  }, [error, isError]);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-8.6rem)] w-full flex items-center justify-center">
        <PageLoading />
      </div>
    );
  }

  const food = data?.data;

  const capitalizeFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-12 bg-[#fffefc]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          {/* Image Section */}
          <div className="w-full max-w-md mx-auto h-[280px] rounded-2xl overflow-hidden shadow-md bg-white">
            <ImageSlider images={food?.images} />
          </div>

          {/* Review Form Section */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Leave a Review
            </h2>
            <ReviewForm foodId={id} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {food?.name ? capitalizeFirstLetter(food.name) : ''}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              {food?.description}
            </p>
          </div>

          <div className="text-4xl font-extrabold text-green-600">
            रु. {parseInt(food?.price).toLocaleString()}
          </div>

          <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition duration-300 w-full sm:w-fit">
            Add to Cart
          </button>

          {/* Customer Reviews */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Customer Reviews
            </h2>
            <Reviews foodId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
