import React from "react";
import Images from "../images/card1.jpg"
import Star from "../images/Star_icons.png"
export default function Cards() {
    return (
        <div className="cards">
            <div className="cards--img">
                <img src={Images} className="card--img1" />
            </div>
            <div className="cards--descr">
                <div className="card--ico">
                    <img src={Star} className="star" />
                    <div className="hotel-name"><h4>Star Home</h4></div>
                    <div>From &#8377;2900</div>
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    )
}