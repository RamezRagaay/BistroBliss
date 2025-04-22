"use client"
import React from 'react'
import  Image  from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
const Who = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname.toString().split('/')[1]);
  },[pathname]);
  
  return (
    <section className=" mx-auto px-4 py-12 md:py-24">
      <div className="container flex flex-col lg:flex-row items-center gap-24">
        <div className="relative w-full md:w-1/2 aspect-[4/3]">
          <Image
            src="/footer_image4.png"
            alt="Wrapped food items on a wooden surface"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <div className="max-md:hidden absolute -bottom-12 -right-12 max-md:right-1/2 bg-primary rounded-2xl text-white p-6 max-w-xs">
            <h3 className="text-xl font-semibold mb-4">Come and visit us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                (414) 857 - 0107
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                happytummy@restaurant.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl text-text font-playfair md:text-[55px] font-bold leading-tight">
            We provide healthy food for your family.
          </h2>
          <p className="text-text font-normal text-[18px]">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p className="text-text font-medium text-[16px]">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
          <Button variant="outline"  className={`${pathname === '/about' && 'hidden'}`}>
            <Link href="/about">
              More About Us
            </Link>
          </Button >
        </div>
      </div>
    </section>
  )
}

export default Who