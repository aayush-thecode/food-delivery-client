/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React from 'react'
import { IFood } from '@/interface/food-interface'
import FoodMenuCard from '../menu-detail/menu.detail';

interface IProps {
  title: string;
  items: IFood[];
  isLoading: boolean;
}

const MenuList: React.FC<IProps> = ({
  title = 'Our Special Menu',
  items,
  isLoading = false,
}) => {
  return (
    <div className="w-full px-4">
      <div>
        <h1 className="font-bold text-2xl tracking-wider font-serif text-center mt-10 mb-6">
          {title}
        </h1>
      </div>

      {isLoading && <p className="text-center text-gray-600">Loading...</p>}

      {!isLoading && items.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <FoodMenuCard
              key={index}
              item={item}
            />
          ))}
        </div>
      )}

      {!isLoading && items.length === 0 && (
        <p className="text-center text-gray-500">No menu items found.</p>
      )}
    </div>
  )
}

export default MenuList;
