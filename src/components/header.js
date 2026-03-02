import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faEmail } from "@fortawesome/free-brands-svg-icons";

function Header() {
    return (
        <div className="header-body">
        <div className="header-left">Contact</div>
        <div className="header-center">Annie Chiganangana</div>
        <div className="header-right">
            <ul>
                <li>LinkedIn <FontAwesomeIcon icon={faLinkedin} /></li>
                <li>GitHub</li>
                <li>Email</li>
            </ul>
        </div>
        </div>
    )
}
export default Header;