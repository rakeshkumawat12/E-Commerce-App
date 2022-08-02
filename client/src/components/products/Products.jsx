import { popularProducts } from '../../data'
import Product from '../product/Product'
import './products.css'


export default function Products() {
    return (
        <div className='container6'>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    )
}