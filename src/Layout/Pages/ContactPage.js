import React from "react";
import {Link} from "react-router-dom";
import CoverPages from "../Component/CoverPages";
import MapItem from "../Component/MapItem";
import Gallery from "../Component/Block/Gallery";

import "./Style/ContactPage.scss";

export default function ContactPage() {
    return(
        <div className="main-contact-pages-container">
            <CoverPages title="Contact us" text="CONTACT" />
            <MapItem />
            <div className="contact-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="form">
                                <div className="title">
                                    <h2>Contact us</h2>
                                    <span>We're open for any suggestion or just to have a chat</span>
                                </div>
                                <div className="item">
                                    <p><strong>ADDRESS: </strong> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                    <p className="item-color"><strong>EMAIL: </strong> info@yoursite.com</p>
                                    <p className="item-color"><strong>PHONE: </strong> + 1235 2355 98</p>
                                </div>
                                <div className="form-item">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Subject" />
                                    <textarea placeholder="Create a message here" />
                                    <button>SEND MESSAGE</button>
                                    <h2>Follow us here</h2>
                                    <Link to="/">FACEBOOK</Link>
                                    <Link to="/">TWITTER</Link>
                                    <Link to="/">INSTAGRAM</Link>
                                    <Link to="/">DRIBBBLE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Gallery />
            </div>
        </div>
    )
}