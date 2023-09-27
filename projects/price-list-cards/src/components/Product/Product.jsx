import React from 'react';
import Feature from '../Feature/Feature';


const Product = ({product}) => {
    return (
        <div className='bg-pink-100 mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl text text-pink-900 font-bold text-center'>
                {product.price}
                </span>
                <span className='text-2xl text-gray-500 font-bold'>/piece</span>
            </h2>
            <h5 className='text-2xl font-bold my-2 text-center'>{product.name}</h5>
            <p className='text-xl text-gray-600 font-bold mt-5 underline'>Features:</p>
            <div className='mb-4'>
                {
                    product.features.map((feature, idx)=> <Feature 
                        key={idx}
                        feature={feature}
                    />)
                }
            </div>
            <button className='w-full hover:bg-gray-500 bg-gray-600 text-white rounded-md py-1 mt-auto'>Buy Now</button>
        </div>
    );
};

export default Product;