/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

const  Select =  dynamic(()=> import('react-select') ,{
    ssr:false
})
import { Controller, } from "react-hook-form";
import React from 'react';
import dynamic from "next/dynamic";
interface IProps {
    control: any;
}
const GenderInput: React.FC<IProps> = ({ control }) => {


    if(!control){
        return null
    }

    const options = [
        {
            label: 'Male',
            value: 'male'
        },
        {
            label: 'Female',
            value: 'female'
        },
        {
            label: 'Others',
            value: 'others'
        },
    ]
    return (
        <>
            <Controller
                name="gender"
                control={control}
                render={({ field:{...others} }) => {
                    return (
                        <>
                            <label>Gender</label>
                            <section >
                                <Select  {...others} options={options} />
                            </section>
                        </>
                    )
                }}
            />
        </>

    )
}

export default GenderInput