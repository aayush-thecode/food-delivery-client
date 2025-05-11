'use client'
import React,{useEffect, useState} from 'react'

interface IProp {
  value: number;
  setValue:(x:number)=> void
}


export const QuantityInput:React.FC<IProp> = ({value, setValue}) => {
    const [quantity,setQuantity] = useState(value)

    const increaseQTY = () =>{
        setQuantity(prev => prev + 1)
    }

    const decreaseQTY = () =>{
        setQuantity((prev:number) => {
            if(prev > 1){
               return  prev - 1
            }
            return 1
        })
    }

    useEffect(()=>{
      setValue(quantity)
    },[quantity,setValue])

    return(
        <div className="flex items-center space-x-2">
  <button
    onClick={decreaseQTY}
    className="w-8 h-8 flex items-center justify-center bg-orange-500 text-lg rounded hover:bg-orange-600 transition"
    aria-label="Decrease quantity"
  >
    -
  </button>

  <input
    type="number"
    value={quantity}
    readOnly
    aria-label="Quantity"
    className="w-12 h-8 text-center border border-orange-400 bg-orange-100 rounded focus:outline-none"
  />

  <button
    onClick={increaseQTY}
    className="w-8 h-8 flex items-center justify-center bg-orange-500 text-lg rounded hover:bg-orange-600 transition"
    aria-label="Increase quantity"
  >
    +
  </button>
</div>

    )
}