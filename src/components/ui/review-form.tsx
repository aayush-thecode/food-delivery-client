/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { RatingStar } from './rating-star';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import reviewSchema from '@/schemas/review-schema'; 
import { IReview } from '@/interface/review.interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postReview } from '@/api/review.api';
import toast from 'react-hot-toast';

interface IProps {
  itemId: string;
}

const ReviewForm: React.FC<IProps> = ({ itemId }) => {
  const queryClient = useQueryClient();
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IReview>({
    defaultValues: {
      rating: 1,
      review: '',
    },
    resolver: yupResolver(reviewSchema),
    mode: 'all'
  });

  const { isPending, mutate } = useMutation({
    mutationFn: postReview,
    mutationKey: ['reviews'],
    onSuccess(data: any) {
      queryClient.invalidateQueries({ queryKey: ['reviews', 'get-product-by-id'] });
      toast.success(data?.message ?? 'Review Submitted!');
      reset();
    },
    onError: (err: Error) => {
      toast.error(err?.message ?? 'Review Submission failed!');
      console.log(err);
    }
  });

  const onSubmit: SubmitHandler<IReview> = (data) => {
    mutate({
      ...data,
      itemId, 
    } as any);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <div>
                <RatingStar
                  edit={true}
                  rating={field.value}
                  onChange={(_: any, value: any) => field.onChange(value || 1)}
                />
                {errors.rating && <p className="text-red-500 mt-1 text-xs">{errors.rating.message}</p>}
              </div>
            )}
          />
          <div>
            <textarea
              placeholder="Write review"
              className="p-2 rounded-md border border-orange-500 focus:outline-none min-h-[200px] w-[min(400px,100%)]"
              {...register('review')}
            />
            {errors.review && <p className="text-red-500 mt-0 text-xs">{errors.review.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              disabled={isPending}
              className="cursor-pointer disabled:cursor-not-allowed disabled:bg-orange-400 px-4 py-2 bg-orange-500 rounded-md text-center font-bold text-white tracking-wider"
            >
              {isPending ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
