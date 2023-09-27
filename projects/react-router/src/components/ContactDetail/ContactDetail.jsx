import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './ContactDetail.css'

const ContactDetail = () => {
    const detail = useLoaderData()
    // console.log(detail)

    const {address, company, id, username, phone, email} = detail
    const {city, street, suite, zipcode} = address
    const {name} = company

    // create navigation handler
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(-1);
    }

    
    return (
        <div className='contact-detail'>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>
            <p>Id: {id}</p>
            <div>
                <p>Address: {street}, {suite}, {city}</p>
                <p>Zipcode: {zipcode}</p>
                <p>Company name: {name}</p>
            </div>

            {/* dynamic routing using useNavigation() hook to go back */}
            <button onClick={handleNavigation}>Go Back</button>
        </div>
    )
};

export default ContactDetail;