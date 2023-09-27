import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='mx-8 mb-8'>
            <h2 className='text-5xl text-gray-500 text-center bg-pink-50 font-bold p-4'>Awsome Affordable Prices</h2>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product = {product}
                    />)
                }
            </div>
        </div>
    );
};

export default ProductList;