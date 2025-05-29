'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IFood } from '@/interface/food-interface'
import { GoTrash } from "react-icons/go"
import { AiFillStar } from "react-icons/ai"

interface IProps {
  item: IFood
  wishlist?: boolean
  handleDelete?: (id: string) => void
}

const FoodMenuDetail: React.FC<IProps> = ({ item, wishlist = false, handleDelete }) => {
  const { coverImage, price, name, _id, averageRating } = item

  return (
    <div className="relative w-64 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* Image */}
      <Link href={`/menu/${_id}`} className="block overflow-hidden rounded-t-2xl">
        <Image
          src={coverImage.path}
          alt={name}
          width={256}
          height={256}
          className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
          priority
        />
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
          <span className="flex items-center text-yellow-400 font-semibold text-sm select-none">
            <AiFillStar size={18} /> <span className="ml-1">{averageRating.toFixed(1)}</span>
          </span>
        </div>

        <p className="text-green-600 font-bold text-xl">रु. {price.toLocaleString()}</p>
      </div>

      {/* Action buttons */}
      <div className="px-4 pb-4 flex items-center justify-between space-x-2">
        <Link href={`/menu/${_id}`} className="flex-1">
          <button className="w-full bg-amber-500 text-white font-semibold py-2 rounded-lg hover:bg-amber-600 transition-colors duration-200">
            View Details
          </button>
        </Link>

        {wishlist && handleDelete && (
          <button
            onClick={() => handleDelete(_id)}
            aria-label="Remove from wishlist"
            className="p-2 rounded-full hover:bg-red-100 transition-colors duration-200"
          >
            <GoTrash className="text-red-500" size={22} />
          </button>
        )}
      </div>
    </div>
  )
}

export default FoodMenuDetail
