import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../utils/fakedb';



const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;

    //add event handler
    const addToCart = (id) => {
        addToDb(id)
    };
    
    const removeFromCart = id => {
        removeFromDb(id)
    }

    return (
        <div className='cosmetic'>
            <h2>Name: {name}</h2>
            <p>Only for ${price}</p>
            <p><small>Id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;