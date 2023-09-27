import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='h-6 w-6 text-gray-600'/>
            <span className='pl-2 text-gray-600'>{feature}</span>
        </div>
    );
};

export default Feature;