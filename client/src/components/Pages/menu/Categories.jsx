"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';

const Categories = () => {
    const [active, setActive] = useState("All")
    useEffect(() => {
        console.log(active);
        
    }, [active]);
  return (
    <div className='grid grid-cols-3 md:grid-cols-5 gap-2 py-10'>
        <Button variant={`${active === "All" ? "" : "outline"}`} className={`text-text border-primary/30 border ${active === "All" ? "text-white" : ""}`} 
        onClick={() => {
            setActive("All")
        }}
        >
            All
        </Button>
        <Button variant={`${active === "Breakfast" ? "" : "outline"}`} className={`text-text border-primary/30 border ${active === "Breakfast" ? "text-white" : ""}`}
        onClick={() => {
            setActive("Breakfast")
        }}
        >
            Breakfast
        </Button>
        <Button variant={`${active === "Main" ? "" : "outline"}`} className={`text-text border-primary/30 border ${active === "Main" ? "text-white" : ""}`}
        onClick={() => {
            setActive("Main")
        }}
        >
            Main Dishes
        </Button>
        <Button variant={`${active === "Drinks" ? "" : "outline"}`} className={`text-text border-primary/30 border ${active === "Drinks" ? "text-white" : ""}`}
        onClick={() => {
            setActive("Drinks")
        }}
        >
            Drinks
        </Button>
        <Button variant={`${active === "Desserts" ? "" : "outline"}`} className={`text-text border-primary/30 border ${active === "Desserts" ? "text-white" : ""}`}
        onClick={() => {
            setActive("Desserts")
        }}
        >
            Desserts
        </Button>
    </div>
  )
}

export default Categories