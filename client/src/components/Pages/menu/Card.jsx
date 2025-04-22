import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='rounded-2xl flex flex-col items-center justify-center border border-primary/20'>
        <Image src="/pizza.png"  alt="food" width={200} height={200} className='object-contain object-center w-full' />
        <div className='flex flex-col items-center p-5 gap-2'>
            <p className='font-bold text-secondary text-[24px]'>$ 9.99</p>
            <p className='font-bold text-text text-[20px]'>Hawaiian Pizza</p>
            <p className='text-text text-[16px] font-sans text-center'>Made with eggs, tomatos, salt, oil and other ingredients</p>
        </div>
    </div>
  )
}

export default Card