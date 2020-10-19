import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ContactLinks } from "../data/adhoc";
import { ContactType } from "../data/types";

export const Contacts = () => {
    return (
        <div className="box">
            Contact the maintainer with problems or suggestions.
            <ul>
                { ContactLinks.map((contact, index) => <li key={index}><ContactItem contact={contact} /></li> )}
            </ul>
        </div>
    );
}

interface ContactItemProps {
    contact: ContactType;
}

export const ContactItem = ({contact}: ContactItemProps) => {
    return (
        <p>
            <FontAwesomeIcon icon={contact.icon} className="mx-2"/>{contact.type}:&nbsp;
            <a href={contact.link}>
                {contact.text}
            </a>
        </p>
    );
}