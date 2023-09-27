import React from 'react';
import './Country.css';


const Country = (props) => {
    // console.log(props.country)

    // const name = props.country.name.common
    // const population = props.country.population
    // const region = props.country.region

    const {area, region, flags, population, name} = props.country;

    return (
        <div className='country bg-info-subtle shadow'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="country flag" />
            <p>Population: {population}</p>
            <p>Area: {area}</p> 
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;