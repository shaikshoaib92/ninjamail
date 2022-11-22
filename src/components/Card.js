import React from "react";


function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="card" />
            <div>
                <p>
                    {props.txt}
                </p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Card;