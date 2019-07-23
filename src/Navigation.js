import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import logo from './logo.png';
import basket from './basket.png';

class Navigation extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const navStyle = {
            color: "white",
            textDecoration: "none"
        }
        return (
            <div className="nav">
                <h3><img src={logo} alt="Logo" /></h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/faq">
                        <li>FAQ</li>
                    </Link>
                    <Link style={navStyle} to="/regulamin">
                        <li>Regulamin</li>
                    </Link>
                    <Link style={navStyle} to="/kontakt">
                        <li>Kontakt</li>
                    </Link>
                    <Link style={navStyle} to="/basket">
                        <li><img src={basket} alt="Basket" /></li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navigation;