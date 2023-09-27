import React from 'react';

const Phone = ({phone}) => {
    console.log(phone)
    
    return (
        <div className='md:flex md:justify-between col-start-3 col-end-5 my-2 bg-slate-200 rounded-lg p-3 shadow-md'>
            <div className='mb-3'>
                <h3 className='text-2xl font-bold'>{phone['phone_name']}</h3>
                <p className='text-xl underline mt-8'>Details:</p>
                <p className='text-gray-700 text-md'>Brand: {phone.brand}</p>
                <p className='text-gray-700 text-md'>Price: {phone.price}</p>
            </div>
            <div>
                <img className='rounded-3xl' src={phone.image} alt="" />
            </div>
        </div>
    );
};

export default Phone;
