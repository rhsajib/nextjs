import React from 'react';
import './Contact.css'
import { Link, useNavigate } from 'react-router-dom';

const Contact = ({contact}) => {
    // console.log(contact)   
    const {name, id} = contact;

    // create navigation handler
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/contacts/${id}`);
    }


    return (
        <div className='contact'>
            <h4>{name}</h4>

            {/* put a '/' at the begining of 'to' attribute inside of the Link tag*/}

            {/* 3 ways of dynamic routing */}

            {/* 1 - dynamic routing using link*/}
            <Link to={`/contacts/${id}`}><small>Show me detail</small></Link>

            {/* 2 - dynamic routing using link and button */}
            <Link to={`/contacts/${id}`}><button>Detail button</button></Link>

            {/* 3 - dynamic routing using useNavigation() hook*/}
            <button onClick={handleNavigation}>See Detail Using Hook</button>
        </div>
    );
};

export default Contact;