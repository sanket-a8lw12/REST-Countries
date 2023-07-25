import React from 'react'

// import { Countries } from './Countries'

export const CountryCard = ({countryFlag, countryName, population, region, capital}) => {
  
  return (
    <>
        <div className='countryCard'> 
        <div className='countryImg'>
            <img src={countryFlag} alt="" />
        </div>
        <div className='countryDetails'>
            <h4>{countryName}</h4>
            <div>Population : {population}</div>
            <div>Region : {region}</div>
            <div>Capital : {capital}</div>
        </div>
        </div>
    </>
  )
}
