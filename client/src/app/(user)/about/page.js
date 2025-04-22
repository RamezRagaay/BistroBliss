import FeelAuth from '@/components/Pages/about/feelauth'
import Who from '@/components/Shared/Who'
import React from 'react'
import Features from '@/components/Pages/about/features';
import Info from '../../components/Pages/about/Info';
import Testimonials from '../../components/Pages/about/testimonials';

const Page = () => {
  return (
    <>
        <Who/>
        <FeelAuth/>
        <Features/>
        <Info/>
        <Testimonials/>
    </>
)
}

export default Page