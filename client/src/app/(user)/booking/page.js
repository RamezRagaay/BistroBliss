"use client"
import React from 'react'
import BookingForm from '../../../components/Pages/book/booking_form';
import  Image  from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-tertiary p-6 h-1/2 relative'>
        <div className='flex flex-col container text-center w-1/2'>
            <h1 className='font-playfair font-medium text-text text-[100px]'>Book A Table</h1>
            <p className='text-[#495460] text-[18px] font-sans mx-10 -mt-3'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <BookingForm/>
        <Image  src='/map.png'  alt="food" width={200} height={200} className={'object-contain object-center w-full absolute top-96 z-10'}/>
    </div>
  )
}

export default page