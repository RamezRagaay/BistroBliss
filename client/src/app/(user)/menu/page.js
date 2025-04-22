import React from 'react'
import Categories from '@/components/Pages/menu/Categories'
import Card from '@/components/Pages/menu/Card'
import Image from 'next/image';
import Brands from '../../../components/Pages/menu/Brands';
const Page = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center container'>
            <h1 className='font-playfair font-normal text-text text-[100px]'>Our Menu</h1>
            <p className='text-[#495460] text-[18px] font-sans text-center w-1/2'>
                We consider all the drivers of change gives you the components you need to change to create a truly happens.
            </p>
            <Categories/>
            <div className='my-12 grid gap-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            
        </div>
        <section className='w-full bg-tertiary'>
            <div className='container p-10 flex items-center justify-center'>
                <div className='hidden md:flex flex-col items-center'>
                    <h4 className='font-playfair font-medium text-text text-center leading-[50px] mb-5 text-[55px]'>You can order through apps</h4>
                    <p className='text-[#414536] text-[16px] font-sans text-center'>
                        We consider all the drivers of change gives you the components you need to change to create a truly happens.
                    </p>
                </div>
            <Brands/>
            </div>
        </section>
    </> 
  )
}

export default Page