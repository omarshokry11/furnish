import React from "react";

import "./Style/Work.scss";

export default function Work() {

    const itemWork = [
        {id: 1, icon: "fas fa-calculator", number: "01", h2: "Get A Free Quote", p: "Far far away, behind the word mountains, far from the countries Vokalia."},
        {id: 2, icon: "fas fa-cog", number: "02", h2: "Production", p: "Far far away, behind the word mountains, far from the countries Vokalia."},
        {id: 3, icon: "fas fa-box", number: "03", h2: "Delivery & Assembly", p: "Far far away, behind the word mountains, far from the countries Vokalia."}
    ]

    return(
        <div className="main-work-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 title">
                        <span>PRODUCTION FLOWS</span>
                        <h2>How it Works</h2>
                    </div>
                    {itemWork.map((item) => <div className="col-md-4 col-12" key={item.id}>
                        <div className="icon">
                            <span className="number">{item.number}</span>
                            <i className={item.icon}> </i>
                        </div>
                        <h2>{item.h2}</h2>
                        <p>{item.p}</p>
                    </div>)}
                    <div className="col-12 buttons">
                        <button className="btn-1">LEARN MORE</button>
                        <button className="btn-2">GET A REQUEST</button>
                    </div>
                </div>
            </div>
        </div>
    )
}