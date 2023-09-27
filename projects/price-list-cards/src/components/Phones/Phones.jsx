import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Phone from '../Phone/Phone';

const Phones = () => {
    const [phones, setPhones] = useState([])

    useEffect( () => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then( data => setPhones(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data
            // console.log(phonesData)
            {
                const newPhonesData = phonesData.map(phone => {
                    const parts = phone.slug.split('-')
                    // console.log(parts[1], typeof parts[1])
                    const price = parseInt(parts[1])

                    const updatedPhone = {...phone, price}
                    return updatedPhone;
                })
                // console.log(newPhonesData)
                setPhones(newPhonesData)
            }
        })
    }, [])


    return (
        <div>
            <h1 className='text-center text-5xl bg-slate-500 text-white mx-8 py-4 mb-2 rounded-lg shadow-2xl'>Welcome to mobile house</h1>
             <div className='grid grid-cols-6 gap-2'>
                {
                    phones.map((phone, index) => <Phone 
                        key ={index}
                        phone={phone}
                    />)
                }
            </div>
        </div>
    );
};

export default Phones;