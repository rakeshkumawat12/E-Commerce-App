import React from 'react'
import { categories } from '../../data'
import CategoryItem from '../categoryitem/CategoryItem'
import "./categories.css"

export default function Categories() {
    return (
        <div className='container4'>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </div>
    )
}
