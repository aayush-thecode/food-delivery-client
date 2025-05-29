'use client'

import React from 'react'
import Image from 'next/image'
import { IFood } from '@/interface/food-interface'
import Link from 'next/link'
import { GoTrash } from 'react-icons/go'

interface IProps {
  item: IFood,
  wishlist?:boolean,
  handleDelete?: (id: string) => void;
}

const MenuCard: React.FC<IProps> = ({ item, wishlist = false, handleDelete }) => {
  if (!item) return null;
  const {_id, name, coverImage, price } = item

  return (
    <div className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-sm">
      <div className="relative w-full h-48">
        <Link href={`menu/${_id}`}>
          <Image
            src={coverImage.path}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-green-600">
            रु. {parseInt(price).toLocaleString()}
          </span>
          <Link href={`menu/${item._id}`}>
          <button className="bg-green-500 text-white px-4 py-1 rounded-xl hover:bg-green-600 transition">
            View Detail
          </button>
          </Link>
          {wishlist && handleDelete && (
      <div
        className="absolute top-2 right-2 z-50 w-fit cursor-pointer"
        onClick={() => handleDelete(item._id)}
      >
        <GoTrash className="text-red-500" size={22} />
      </div>
    )}
        </div>
      </div>
  )
}

export default MenuCard;
