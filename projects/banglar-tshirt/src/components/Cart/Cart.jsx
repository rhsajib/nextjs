import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Order summary :{cart.length}</h2>
            {
                cart.map((tshirt) => (
                    <p key={tshirt.id}>
                        {tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt)}>
                            X
                        </button>
                    </p>
                ))
                // cart.map(tshirt => <span key={tshirt.id}>
                //     {tshirt.name}
                //     <button>X</button></span>)
            }
        </div>
    );
};

export default Cart;
