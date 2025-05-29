/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React, { useEffect } from "react"
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { getAllMenu } from "@/api/menu.api"
import MenuList from "../menu-list"

const Menu = () => {

    const { isPending, data, isError, error } = useQuery({
        queryKey: ['Menu'],
        queryFn: getAllMenu,
    })
    console.log('menu', data, isPending)

    useEffect(() => {
        if(isError) {
            toast.error(error?.message ?? "Something went wrong!")
        }
    },[error, isError]);

    return (
        <div className="mt-10">
        {
            <MenuList title='Food Menu' items={data?.data?.data?? []} isLoading={isPending}/>
        }
        </div>
    )
}

export default Menu;