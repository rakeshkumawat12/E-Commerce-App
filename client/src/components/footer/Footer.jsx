import {MailOutline, Phone, Room, } from "@material-ui/icons";
import './footer.css'

export default function Footer() {
    return (
        <div className="container9">
            <div className="left9">
                <h1>The Headphone House.</h1>
                <p className="desc9">
                    India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!
                </p>
            </div>
            <div className="center9">
                <h3 className="title9">Useful Links</h3>
                <ul className="list9">
                    <li className="listItem9">Home</li>
                    <li className="listItem9">Cart</li>
                    <li className="listItem9">Trending Products</li>
                    <li className="listItem9">Best Sellers</li>
                    <li className="listItem9">Accessories</li>
                    <li className="listItem9">My Account</li>
                    <li className="listItem9">Order Tracking</li>
                    <li className="listItem9">Wishlist</li>
                    <li className="listItem9">Wishlist</li>
                    <li className="listItem9">Terms</li>
                </ul>
            </div>
            <div className="right9">
                <div className="contactItem9">Contact</div>
                <div className="contactItem9">
                    <Room style={{ marginRight: "10px" }} /> 456 Rajasthan Pali , Near Famous Halwa Shop
                </div>
                <div className="contactItem9">
                    <Phone style={{ marginRight: "10px" }} /> +91 987 654 3021
                </div>
                <div className="contactItem9">
                    <MailOutline style={{ marginRight: "10px" }} /> contact@theheadphonehouse
                </div>
                <img className="payment9" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="img" />
            </div>
        </div>
    )
}
