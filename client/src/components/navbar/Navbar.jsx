import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className='container'>
            <div className="wrapper">
                <div className="left">
                    <div className="language">EN</div>
                    <div className="searchContainer">
                        <input className='Input' placeholder='Search' type="text" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo">The Headphone House.</h1>
                </div>
                <div className="right">
                    <div className="menuItem">REGISTER</div>
                    <div className="menuItem">SIGN IN</div>
                    <div className="menuItem">
                    <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}
