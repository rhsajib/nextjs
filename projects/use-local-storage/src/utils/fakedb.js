// using local storage of browser 
const addToDb = id => {
    let shoppingCart = {};

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // get the quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


// remove all quantity from cart
const removeFromDb = id => {

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);

        // get the quantity
        if (id in shoppingCart) {       
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}


// delete shopping cart
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}


export{
    addToDb,
    removeFromDb,
    deleteShoppingCart
}