import Header from '@/components/Pages/home/Header'
import React from 'react'
import BrowseMenu from '../../components/Pages/home/BrowseMenu';
import Who from '../../components/Shared/Who';

const Page = () => {
  return (
    <>
      <Header/>
      <BrowseMenu/>
      <Who/>
    </>
  )
}

export default Page