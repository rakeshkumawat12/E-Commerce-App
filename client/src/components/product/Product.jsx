import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, } from "@material-ui/icons";
import './product.css'

export default function Product({ item }) {
    return (
        <div className="container6">
            <div className="circle" />
            <img className="image6" src={item.img} alt="img" />
            <div className="info">
                <div className="icon">
                    <ShoppingCartOutlined />
                </div>
                <div className="icon">
                    <SearchOutlined />
                </div>
                <div className="icon">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    )
}
