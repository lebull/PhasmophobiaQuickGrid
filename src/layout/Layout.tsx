import React from "react";
import { Link } from "react-router-dom";

interface ILayoutProps {
    children: any;
}

export const Layout = ({ children } : ILayoutProps) => 
    <div>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
            { children }
        <div>Footer</div>
    </div>  
