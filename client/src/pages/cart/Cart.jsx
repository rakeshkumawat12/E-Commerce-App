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
            <div className="wrapper10">
                <h1 className="title10">YOUR HOUSE</h1>
                <div className="top10">
                    <button className="topButton10">CONTINUE SHOPPING</button>
                    <div className="topTexts10">
                        <span className="topText10">Shopping Bag(2)</span>
                        <span className="topText10">Your Wishlist (0)</span>
                    </div>
                    <button className="topButton10" type="filled">CHECKOUT NOW</button>
                </div>
                <div className="bottom10">
                    <div className="info10">
                        <div className="product10">
                            <div className="productDetail10">
                                <img className="image10" src={h1} alt="img"/>
                                <div className="details10">
                                    <span>
                                        <b>Product:</b> Romex Headphone
                                    </span>
                                    <span>
                                        <b>ID:</b> IT67352
                                    </span>
                                    <div className="productColor10" color="black" />

                                </div>
                            </div>
                            <div className="productDetail10">
                                <div className="productAmountContainer10">
                                    <Add />
                                    <div className="productAmount10">1</div>
                                    <Remove />
                                </div>
                                <div className="productPrice10">$ 130</div>
                            </div>
                        </div>
                        <hr />
                        <div className="product10">
                            <div className="productDetail10">
                                <img className="image10" src={h2} alt="img"/>
                                <div className="details10">
                                    <span>
                                        <b>Product:</b> Thunder Headphone
                                    </span>
                                    <span>
                                        <b>ID:</b> ID89765
                                    </span>
                                    <div className="productColor10" color="gray" />
                                </div>
                            </div>
                            <div className="productDetail10">
                                <div className="productAmountContainer10">
                                    <Add />
                                    <div className="productAmount10">1</div>
                                    <Remove />
                                </div>
                                <div className="productPrice10">$ 120</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary10">
                        <h1 className="summaryTitle10">ORDER SUMMARY</h1>
                        <div className="summaryItem10">
                            <span>Subtotal</span>
                            <span>$ 250</span>
                        </div>
                        <div className="summaryItem10">
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className="summaryItem10">
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className="summaryItem10" type="total">
                            <span>Total</span>
                            <span>$ 250</span>
                        </div>
                        <div className="button10">CHECKOUT NOW</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
