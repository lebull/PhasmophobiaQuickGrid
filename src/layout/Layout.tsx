// import { faGhost } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () =>
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item px-i" href="/">
                <img src="/android-chrome-192x192.png" alt="logo"></img>
                {/* <span className="icon">
                    <FontAwesomeIcon icon={faGhost} size="2x" />
                </span> */}
                <h4 className="title is-4 px-2">EMFFive.com</h4>
            </a>

            <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link  to="/" className="navbar-item" />

     

                {/* <a className="navbar-item">
                    Documentation
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Ghosts
                    </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div> */}
            </div>

            <div className="navbar-end">

                <div className="navbar-item">
                    <a href="https://store.steampowered.com/app/739630/Phasmophobia/" className="navbar-item">
                        Buy Phasmophobia on Steam
                    </a>
                </div>

                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary">
                            <strong>Buy me a Coffee</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>


interface ILayoutProps {
    children: any;
}

export const Layout = ({ children } : ILayoutProps) => 
    <div>
        <Header/>
        <div className="container m-5">
            { children }
        </div>
        {/* <div>Footer</div> */}
    </div>  
