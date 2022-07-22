import React from 'react'
import "./categoryitem.css"

export default function CategoryItem({ item }) {
    return (
        <div className='container5'>
            <img className='image1' src={item.img} />
            <div className='info1'>
                <h1 className='title1'>{item.title}</h1>
                <button className='button1'>SHOP NOW</button>
            </div>
        </div>
    )
}
