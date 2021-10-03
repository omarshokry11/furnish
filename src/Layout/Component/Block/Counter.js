import React from "react";

import "./Style/Counter.scss";

export default function Counter() {

    const counter = [
        {id: 1, number: "20", span: "YEAR OF EXPERIENCED"},
        {id: 2, number: "10,200", span: "SATISFIED CUSTOMERS"},
        {id: 3, number: "9,850", span: "PROJECT COMPLETED"},
        {id: 4, number: "20", span: "GET AWARDS"}
    ]

    return(
        <div className="main-counter-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center">
                            <span>GREAT REVIEWS FOR OUR SERVICES</span>
                            <h2>Technical Statistics</h2>
                        </div>
                    </div>
                    {counter.map((count) => <div className="col-lg-3 col-md-6 col-12 text-center" key={count.id}>
                        <div className="item">
                            <h2>{count.number}</h2>
                            <span>{count.span}</span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}