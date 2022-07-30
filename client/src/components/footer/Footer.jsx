import {MailOutline, Phone, Room, } from "@material-ui/icons";
import './footer.css'

export default function Footer() {
    return (
        <div className="container0">
            <div className="left1">
                <h1>The Headphone House.</h1>
                <p className="desc1">
                    India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!
                </p>
            </div>
            <div className="center1">
                <h3 className="title4">Useful Links</h3>
                <ul className="list1">
                    <li className="listItem">Home</li>
                    <li className="listItem">Cart</li>
                    <li className="listItem">Trending Products</li>
                    <li className="listItem">Best Sellers</li>
                    <li className="listItem">Accessories</li>
                    <li className="listItem">My Account</li>
                    <li className="listItem">Order Tracking</li>
                    <li className="listItem">Wishlist</li>
                    <li className="listItem">Wishlist</li>
                    <li className="listItem">Terms</li>
                </ul>
            </div>
            <div className="right1">
                <div className="contactItem">Contact</div>
                <div className="contactItem">
                    <Room style={{ marginRight: "10px" }} /> 456 Rajasthan Pali , Near Famous Halwa Shop
                </div>
                <div className="contactItem">
                    <Phone style={{ marginRight: "10px" }} /> +91 987 654 3021
                </div>
                <div className="contactItem">
                    <MailOutline style={{ marginRight: "10px" }} /> contact@theheadphonehouse
                </div>
                <img className="payment11" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="img" />
            </div>
        </div>
    )
}
