import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Contact from '../Contact/Contact';


const Contacts = () => {
    const contacts = useLoaderData();
    // console.log(contacts)
    return (
        <div>
            <h1>Total Contacts: {contacts.length}</h1>
            {
                contacts.map(contact =>               
                <Contact 
                    key={contact.id}
                    contact={contact}
                />)
            }
        </div>
    );
};

export default Contacts ;