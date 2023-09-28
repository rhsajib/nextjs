import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, habdleAddToCart}) => {
    const { picture, price, name, selected, gender } = tshirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => habdleAddToCart(tshirt)}>
                {
                    selected ?  'Remove from Cart' :'Buy Now'
                }
            </button>
        </div>
    );
};

export default Tshirt;
