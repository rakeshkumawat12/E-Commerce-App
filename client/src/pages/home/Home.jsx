import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Products from '../../components/products/Products'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
      <Products />
      <Newsletter/>
      <Footer/>
    </div>
  )
}
