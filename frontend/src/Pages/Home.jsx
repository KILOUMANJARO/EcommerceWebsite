import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { SideCart } from '../Components/SideCart/SideCart'

export const Home = () => {
  return (
    <div>
    {/*  <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/> */}
      <SideCart/>
      
    </div>
  )
}
