import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 bg-slate-400 md:bg-inherit px-8 pb-4 hover:text-white md:hover:text-slate-400'>
            <a href={route.path}>{route.name}</a>
        </li>

    );
};

export default Link;