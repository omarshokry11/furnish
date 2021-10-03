import React from "react";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

import "./Style/MainFooter.scss";

export default function MainFooter() {

    const footerItem = [
        {id: 1, h2: "Furnish", pathLink: "/", p: "A small river named Duden flows by their place and supplies it with the necessary regelialia.", class: "social", ul: [
                {id: 1, icon: "fab fa-twitter"},
                {id: 2, icon: "fab fa-facebook"},
                {id: 3, icon: "fab fa-instagram"}
            ]},
        {id: 2, h3: "Services", ul: [
                {id: 1, icon: "fas fa-long-arrow-alt-right", span: "Amazing Deals"},
                {id: 2, icon: "fas fa-long-arrow-alt-right", span: "Quality Furniture"},
                {id: 3, icon: "fas fa-long-arrow-alt-right", span: "Modern Design"},
                {id: 4, icon: "fas fa-long-arrow-alt-right", span: "Best Support"},
            ]},
        {id: 3, h3: "Recent Posts", ul: [
                {id: 1, image: "/img/blog-1.webp", span: [
                        {id: 1, icon: "fas fa-calendar", span: "Mar, 05, 2021"},
                        {id: 2, icon: "fas fa-user", span: "Admin"},
                    ]},
                {id: 2, image: "/img/blog-2.webp", span: [
                        {id: 1, icon: "fas fa-calendar", span: "Mar, 05, 2021"},
                        {id: 2, icon: "fas fa-user", span: "Admin"},
                    ]},
            ]},
        {id: 4, h3: "Have a Questions?", ul: [
                {id: 1, icon: "fas fa-map-marked-alt", span: "203 Fake St. Mountain View, San Francisco, California, USA", class: "icon"},
                {id: 2, icon: "fas fa-phone-alt", span: "+2 392 3929 210"},
                {id: 3, icon: "fas fa-paper-plane", span: "info@yourdomain.com"}
            ]},
    ]

    return(
        <div className="main-footer-container">
            <div className="container">
                <div className="row">
                    {footerItem.map((item) => <div className="col-lg-3 col-md-6 col-12" key={item.id}>
                        {item.h2 ? <h2><Link to={item.pathLink} className="logo" key={item.id}>{item.h2}</Link></h2> : <h3>{item.h3}</h3>}
                        <p>{item.p}</p>
                        <ul className={item.class} key={item.id}>
                            {item.ul.map((list) =>  <li key={list.id}>
                                {list.image ?
                                    <div className="img-details">
                                        <Image src={list.image} />
                                        <div className="details">
                                            {list.span.map((i) => <span key={i.id}><i className={i.icon}> </i>{i.span}</span>)}
                                            <p>Shop the Look Cottage Country Living Room</p>
                                        </div>
                                    </div> :
                                    <Link to="/"><i className={list.icon}> </i> {list.span ? <span className={list.class}>{list.span}</span> : null}</Link>}
                            </li>)}
                        </ul>
                    </div>)}
                </div>
            </div>
            <div className="inner-footer">
                <p>Copyright ©2021 All rights reserved | This template is made with <i className="fas fa-heart"> </i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
            </div>
        </div>
    )
}