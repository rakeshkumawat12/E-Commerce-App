import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Products from '../../components/products/Products'
import Newletter from '../../components/newletter/Newletter'

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
      <Products />
      <Newletter/>
    </div>
  )
}
