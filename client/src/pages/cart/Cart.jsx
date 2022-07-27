import { Add, Remove } from "@material-ui/icons";
import './cart.css'
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";


export default function Cart() {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className="wrapper11">
                <h1 className="title4">YOUR BAG</h1>
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
                                <img className="image6" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="img"/>
                                <div className="details22">
                                    <span>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="productColor1" color="black" />
                                    <span>
                                        <b>Size:</b> 37.5
                                    </span>
                                </div>
                            </div>
                            <div className="productDetail1">
                                <div className="productAmountContainer">
                                    <Add />
                                    <div className="productAmount">2</div>
                                    <Remove />
                                </div>
                                <div className="productPrice">$ 30</div>
                            </div>
                        </div>
                        <hr />
                        <div className="product22">
                            <div className="productDetail1">
                                <img className="image6" src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="img"/>
                                <div className="details22">
                                    <span>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="productColor1" color="gray" />
                                    <span>
                                        <b>Size:</b> M
                                    </span>
                                </div>
                            </div>
                            <div className="productDetail1">
                                <div className="productAmountContainer">
                                    <Add />
                                    <div className="productAmount">1</div>
                                    <Remove />
                                </div>
                                <div className="productPrice">$ 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary1">
                        <h1 className="summaryTitle1">ORDER SUMMARY</h1>
                        <div className="summaryItem1">
                            <span>Subtotal</span>
                            <span>$ 80</span>
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
                            <span>$ 80</span>
                        </div>
                        <div className="button16">CHECKOUT NOW</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
