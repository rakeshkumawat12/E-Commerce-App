import React from 'react'
import { Link } from 'react-router-dom'
import "./categoryitem.css"

export default function CategoryItem({ item }) {
    return (
        <div className='container5'>
            <img className='image5' src={item.img} />
            <div className='info5'>
                <h1 className='title5'>{item.title}</h1>
                <Link to="/product" className='button5'>SHOP NOW</Link>
            </div>
        </div>
    )
}
