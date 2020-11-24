import { faGithub, faSteam } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface INavbarSectionProps {
    title: string,
    children: any
}

export const NavbarSection = ({title, children} : INavbarSectionProps) => {
    return <div className={`navbar-item has-dropdown is-hoverable`}>
        <div className="navbar-link">
            {title}
        </div>
        <div className="navbar-dropdown">
            {children}
        </div>
    </div>
}

export const Navbar = () => {

    const [active, setActive] = useState(false)
    const toggleMenu = () => setActive(!active);

    return (<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item px-i" href="/">
            <img src="/android-chrome-192x192.png" alt="logo"></img>
            <h4 className="title is-4 px-2">EMF Five</h4>
        </a>

        <div className={`navbar-burger burger is-clickable ${active ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleMenu}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>

    <div id="navbarBasicExample" className={`navbar-menu ${active ? "is-active" : ""}`}>
        <div className="navbar-start">
            <Link to="/" className="navbar-item" onClick={toggleMenu}>
                Home
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
                <Link to={`/challenges`} className="navbar-item" onClick={toggleMenu}>
                    Challenges
                </Link>
            </div>


            <div className="navbar-item has-dropdown is-hoverable">
                <Link to={`/ghosts`} className="navbar-item" onClick={toggleMenu}>
                    Ghosts
                </Link>
            </div>


            <div className="navbar-item has-dropdown is-hoverable">
                <Link to={`/items`} className="navbar-item" onClick={toggleMenu}>
                    Items
                </Link>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                    About
                </div>
                <div className="navbar-dropdown">
                    <a href="https://store.steampowered.com/app/739630/Phasmophobia/" className="navbar-item">
                        <FontAwesomeIcon icon={faSteam} size="lg" />
                        <span className="px-3">Phasmophobia Steam Page</span>
                    </a>
                    <a href="https://github.com/lebull/PhasmophobiaQuickGrid" className="navbar-item">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                        <span className="px-3">Contribute to This Site</span>
                    </a>
                    <hr className="navbar-divider" />
                    <Link to="/contact" className="navbar-item" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        <span className="px-3">Contact</span>
                    </Link>
                    {/* <a className="navbar-item">
                        Terms of Service
                    </a>
                    <a className="navbar-item">
                        Privacy Policy
                    </a>
                    <a className="navbar-item">
                        Report an issue
                    </a> */}
                </div>
            </div>


        </div>
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-primary" href="https://www.buymeacoffee.com/windythedeer" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCoffee} />
                        <span className="px-3">Buy Me a Coffee</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>)
}