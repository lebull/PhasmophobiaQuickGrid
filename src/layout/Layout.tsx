import React from "react";
import { Link } from "react-router-dom";

const Header = () =>
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28"></img>
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div className="navbar-menu">
            <div className="navbar-start">
                <Link to="/" className="navbar-item">Home</Link>
            </div>
        </div>
    </nav>


interface ILayoutProps {
    children: any;
}

export const Layout = ({ children } : ILayoutProps) => 
    <div>
        <Header/>
        { children }
        <div>Footer</div>
    </div>  
