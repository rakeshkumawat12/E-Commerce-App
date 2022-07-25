import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, } from "@material-ui/icons";
import './footer.css'

export default function Footer() {
    return (
        <div className="container0">
            <div className="left1">
                <h1>LAMA.</h1>
                <p className="desc1">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
            </div>
            <div className="center1">
                <h3 className="title4">Useful Links</h3>
                <ul className="list1">
                    <li className="listItem">Home</li>
                    <li className="listItem">Cart</li>
                    <li className="listItem">Man Fashion</li>
                    <li className="listItem">Woman Fashion</li>
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
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </div>
                <div className="contactItem">
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </div>
                <div className="contactItem">
                    <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
                </div>
                <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </div>
    )
}
