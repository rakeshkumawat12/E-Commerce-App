import './product.css'
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";

export default function Product() {
    return (
        <div className='container23'>
            <Navbar />
            <Announcement />
            <div className='wrapper23'>
                <div className='imgContainer'>
                    <img src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='img'/>
                </div>
                <div className='infoContainer'>
                    <h1>Denim Jumpsuit</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </p>
                    <span className='price23'>$ 20</span>
                    <div className='filterContainer'>
                        <div className='filter'>
                            <span className='filterTitle'>Color</span>
                            <div className='filterColor' color="black" />
                            <div className='filterColor' color="darkblue" />
                            <div className='filterColor' color="gray" />
                        </div>
                        <div className='filter'>
                            <span className='filterTitle'>Size</span>
                            <select className='filterSize'>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='addContainer'>
                        <div className='amountContainer'>
                            <Remove />
                            <span className='amount23'>1</span>
                            <Add />
                        </div>
                        <button className='button23'>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
