import React from "react";
import { ContactLinks } from "../data/adhoc";
export const Footer = () => {
    const contactLink = ContactLinks.find(link => link.type === "Email");
    if(!contactLink){
        return null;
    }
    return <footer className="footer has-text-centered">
        Send suggestions to <a href={contactLink.link}>{contactLink.text}</a>
    </footer>
}