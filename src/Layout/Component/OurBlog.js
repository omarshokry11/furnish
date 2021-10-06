import React from "react";
import {Image} from "react-bootstrap";

import "./Style/OurBlog.scss";

export default function OurBlog({orderItem}) {
    return(
        <div className="main-our-blog-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 title text-center">
                        <span>OUR BLOG</span>
                        <h2>Recent From Blog</h2>
                    </div>
                    {orderItem.map((item) => <div className="col-md-6 col-12 items" key={item.id}>
                        <div className="blog-item">
                            <div className={item.className}>
                                <Image src={item.img} />
                            </div>
                            <div className={item.classOrder}>
                                <p>
                                    {item.spanItem.map((span) => <span key={span.id} className={span.class}><i className={span.icon}> </i> {span.name}</span>)}
                                </p>
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}