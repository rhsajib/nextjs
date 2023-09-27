import React, { useState } from 'react';
import './Navbar.css';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const routes = [
        {
          "id": 1,
          "name": "Home",
          "path": "/"
        },
        {
          "id": 2,
          "name": "About",
          "path": "/about"
        },
        {
          "id": 3,
          "name": "Services",
          "path": "/services"
        },
        {
          "id": 4,
          "name": "Portfolio",
          "path": "/portfolio"
        },
        {
          "id": 5,
          "name": "Contact",
          "path": "/contact"
        }
      ]

    const [open, setOpen] = useState(false)
      
    return (
        <nav className='bg-slate-200 h-10 flex flex-wrap content-center'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ? 
                            <XMarkIcon className="h-6 w-6 text-blue-500" /> : 
                            <Bars3Icon className="h-6 w-6 text-blue-500" />
                    }
                </span>
            </div>
            <ul className={`md:flex absolute md:static duration-500 md:pl-8 md:pt-3 ${open ? 'top-10' : '-top-96'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;