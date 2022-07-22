import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
    </div>
  )
}
