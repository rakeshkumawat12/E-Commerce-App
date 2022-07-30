import './productlist.css'
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

export default function ProductList() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className='title31'>Headphones</h1>
      <div className='filterContainer31'>
        <div className='filter31'>
          <span className='filterText31'>Filter Products:</span>
          <select className='select31'>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className='select31'>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className='filter31'>
          <span className='filterText31'>Sort Products:</span>
          <select className='select31'>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}
