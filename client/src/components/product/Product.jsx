import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, } from "@material-ui/icons";
import { Link } from "react-router-dom";
import './product.css'

export default function Product({ item }) {
    return (
        <div className="container7">
            <div className="circle7" />
            <img className="image7" src={item.img} alt="img" />
            <div className="info7">
                <div className="icon7">
                    <ShoppingCartOutlined />
                </div>
                <Link to="/productlist" className="icon7">
                    <SearchOutlined />
                </Link>
                <div className="icon7">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    )
}
