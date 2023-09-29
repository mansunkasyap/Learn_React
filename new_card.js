import React from "react";
import Images from "../images/card1.jpg"
import Star from "../images/Star_icons.png"
export default function Cards(props) {
    return (
        <div className="cards">
            <div className="cards--img">
                <img src={props.img} className="card--img1" />
            </div>
            <div className="cards--descr">
                <div className="card--ico">
                    <img src={Star} className="star" />
                    <div className="hotel-name"><h4>{props.name}</h4></div>
                    <div>From &#8377;{props.price}</div>
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
