import React from "react";

import "./Style/NumberBlock.scss";

export default function NumberBlock() {

    const numberBlock = [
        {id: 1, number: "1", class: "active"},
        {id: 2, number: "2"},
        {id: 3, number: "3"},
        {id: 4, number: "4"},
        {id: 5, number: "5"},
    ]

    return(
        <div className="collection-number-page text-center">
            <span><i className="fas fa-chevron-left"> </i></span>
            {numberBlock.map((number) => <span key={number.id} className={number.class}>{number.number}</span>)}
            <span><i className="fas fa-chevron-right"> </i></span>
        </div>
    )
}