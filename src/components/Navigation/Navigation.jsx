import React from "react";
import "./navigation.css";

export const Navigation = () => {
    return (
        <>
            <div className="nav--container">
                <div className="logo--name">
                    <h1 className="logo">LOGO</h1>
                </div>
                <nav className="navigation">
                    <ul className="nav--list">
                        <li className="nav--items">
                            Home
                        </li>
                        <li className="nav--items">
                            About
                        </li>
                        <li className="nav--items">
                            Contact Us
                        </li>
                        <li className="nav--items">
                            Help
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}