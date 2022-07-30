import { Add, Remove } from "@material-ui/icons";
import './cart.css'
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import h1 from "../../Assets/h1.png"
import h2 from "../../Assets/h2.png"

export default function Cart() {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className="wrapper11">
                <h1 className="title4">YOUR HOUSE</h1>
                <div className="top11">
                    <button className="topButton1">CONTINUE SHOPPING</button>
                    <div className="topTexts">
                        <span className="topText">Shopping Bag(2)</span>
                        <span className="topText">Your Wishlist (0)</span>
                    </div>
                    <button className="topButton1" type="filled">CHECKOUT NOW</button>
                </div>
                <div className="bottom1">
                    <div className="info55">
                        <div className="product22">
                            <div className="productDetail1">
                                <img className="image6" src={h1} alt="img"/>
                                <div className="details22">
                                    <span>
                                        <b>Product:</b> Romex Headphone
                                    </span>
                                    <span>
                                        <b>ID:</b> IT67352
                                    </span>
                                    <div className="productColor1" color="black" />

                                </div>
                            </div>
                            <div className="productDetail1">
                                <div className="productAmountContainer">
                                    <Add />
                                    <div className="productAmount">1</div>
                                    <Remove />
                                </div>
                                <div className="productPrice">$ 130</div>
                            </div>
                        </div>
                        <hr />
                        <div className="product22">
                            <div className="productDetail1">
                                <img className="image6" src={h2} alt="img"/>
                                <div className="details22">
                                    <span>
                                        <b>Product:</b> Thunder Headphone
                                    </span>
                                    <span>
                                        <b>ID:</b> ID89765
                                    </span>
                                    <div className="productColor1" color="gray" />
                                </div>
                            </div>
                            <div className="productDetail1">
                                <div className="productAmountContainer">
                                    <Add />
                                    <div className="productAmount">1</div>
                                    <Remove />
                                </div>
                                <div className="productPrice">$ 120</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary1">
                        <h1 className="summaryTitle1">ORDER SUMMARY</h1>
                        <div className="summaryItem1">
                            <span>Subtotal</span>
                            <span>$ 250</span>
                        </div>
                        <div className="summaryItem1">
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className="summaryItem1">
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className="summaryItem1" type="total">
                            <span>Total</span>
                            <span>$ 250</span>
                        </div>
                        <div className="button16">CHECKOUT NOW</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
