import React from "react";
import {Image} from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./Style/CarouselAlice.scss";

export default function CarouselAliceItem() {

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 3},
    };

    const items = [
        {id: 1, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-1.webp", userName: "Roger Scott", span: "Marketing Manager"},
        {id: 2, className: "item item-2", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-2.webp", userName: "Roger Scott", span: "Marketing Manager"},
        {id: 3, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-3.webp", userName: "Roger Scott", span: "Marketing Manager"},
        {id: 4, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-4.webp", userName: "Roger Scott", span: "Marketing Manager"},
        {id: 5, className: "item item-2", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-1.webp", userName: "Roger Scott", span: "Marketing Manager"},
        {id: 6, className: "item", p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", imgUser: "/img/user-2.webp", userName: "Roger Scott", span: "Marketing Manager"}
    ]

    return(
        <div className="main-carousel-alice-container">
            <div className="title text-center">
                <span>TESTIMONIAL</span>
                <h2>Happy Customers</h2>
            </div>
            <div className="products-carousel-section container">
                <AliceCarousel
                    autoPlay
                    activeIndex={0}
                    infinite={true}
                    responsive={responsive}
                    autoPlayInterval={1000}
                    fadeOutAnimation={false}
                    dotsDisabled={true}
                    touchTrackingEnabled={true}
                    mouseTrackingEnabled={true}
                >
                    {items.map((item) => <div className="items" key={item.id}>
                        <div className={item.className}>
                            <p>{item.p}</p>
                            <div className="icon">
                                <i className="fas fa-quote-left"> </i>
                            </div>
                            <div className="details">
                                <Image src={item.imgUser} className="user-img" />
                                <div className="user">
                                    <h3>{item.userName}</h3>
                                    <span>{item.span}</span>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </AliceCarousel>
            </div>
        </div>
    )
}