import React from "react";
import CoverPages from "../Component/CoverPages";
import Counter from "../Component/Block/Counter";
import CarouselAliceItem from "../Component/CarouselAlice";

import "./Style/AboutPage.scss";

export default function AboutPage() {

    const aboutItems = [
        {id: 1, class: "cover-about"},
        {id: 2, className: "details-about-page", title: "title", span: "ABOUT FURNISH", h2: "More than 20k Trusted Our Furniture Industry", paragraph: [
                {id: 1, p: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. " +
                        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."},
                {id: 2, p: "A small river named Duden flows by their place and supplies it with the necessary regelialia. " +
                        "It is a paradisematic country,in which roasted parts of sentences fly into your mouth."}
            ]},
    ]

    return(
        <div className="main-about-page-container">
            <CoverPages title="About Us" text="About Us" />
            <div className="main-about-content">
                <div className="container">
                    <div className="row">
                        {aboutItems.map((item) => <div className="col-lg-6 col-12" key={item.id}>
                            {item.class ? <div className={item.class}> </div> : <div className={item.className}>
                                <div className={item.title}>
                                    <span>{item.span}</span>
                                    <h2>{item.h2}</h2>
                                </div>
                                {item.paragraph.map((p) => <p key={p.id}>{p.p}</p>)}
                            </div>}
                        </div>)}
                    </div>
                </div>
                <Counter />
                <CarouselAliceItem />
            </div>
        </div>
    )
}