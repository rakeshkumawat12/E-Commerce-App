import './product.css'
import h1 from "../../Assets/h1.png"
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";

export default function Product() {
    return (
        <div className='container12'>
            <Navbar />
            <Announcement />
            <div className='wrapper12'>
                <div className='imgContainer12'>
                    <img className='img12' src={h1} alt='img' />
                </div>
                <div className='infoContainer12'>
                    <h1 className='h112'>MAAT BLACK EDITION</h1>
                    <p className='p12'>
                        There is no better justice to your playlist than MAAT BLACK EDITION boAt. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins– just like the Dark Knight, as you indulge in your playlist with its 40mm dynamic drivers. Versatile just like the Batman, MAAT BLACK EDITION are equipped with super adaptive headbands for comfort. Be your batman as you get ready to rule with MAAT BLACK EDITION
                    </p>
                    <span className='price12'>$ 120</span>
                    <div className='addContainer12'>
                        <div className='amountContainer12'>
                            <Remove />
                            <span className='amount12'>1</span>
                            <Add />
                        </div>
                        <button className='button12'>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
