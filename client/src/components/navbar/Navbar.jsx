import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='container2'>
            <div className="wrapper2">
                <div className="left2">
                    <div className="language2">EN</div>
                    <div className="searchContainer2">
                        <input className='input2' placeholder='Search' type="text" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </div>
                </div>
                <div className="center2">
                    <h1 className="logo2">The Headphone House.</h1>
                </div>
                <div className="right2">
                    <Link to='/register' className="menuItem2">REGISTER</Link>
                    <Link to='/login' className="menuItem2">SIGN IN</Link>
                    <Link className="menuItem" to="/cart">
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    )
}
