import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
    const loadedTshirts = useLoaderData();
    const [tshirts,setTshirts] = useState(loadedTshirts)
    const [cart, setCart] = useState([])


    const habdleAddToCart = tshirt => {
        // console.log(tshirt)
        tshirt['selected'] = true
        const newCart = [...cart, tshirt]
        setCart(newCart)
    }

    const handleRemoveFromCart = (tshirt) => {
        // console.log(tshirt)

        // set cart state
        const remaining = cart.filter(ts => ts.id !== tshirt.id)
        setCart(remaining)

        //set tshirts state
        const modifiedTshirts = tshirts.map(ts => {
            // if (ts.id === tshirt.id) {
            //     ts.selected = false
            // }
            console.log(ts)
        })
        // console.log(modifiedTshirts)
        
        // setTshirts(modifiedTshirts)
    }
    return (
        <div className="home-container">
            <div className="tshirts-container">
                {tshirts.map((tshirt) => (
                    <Tshirt 
                        key={tshirt.id} 
                        tshirt={tshirt} 
                        habdleAddToCart={habdleAddToCart} 
                    />
                ))}
            </div>
            <div className="cart-container">
                 <Cart 
                    cart={cart}   
                    handleRemoveFromCart={handleRemoveFromCart}        
                 />
            </div>
        </div>
    );
};

export default Home;
