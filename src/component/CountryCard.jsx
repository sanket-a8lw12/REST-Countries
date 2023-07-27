import React from 'react'
import { useContext } from "react"
import {ThemeContext} from './../App';

export const CountryCard = ({countryFlag, countryName, population, region, capital}) => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  
  return (
    <>
        <div className= {darkTheme &&  'countryCard darkMode' || 'countryCard'} > 
        <div className='countryImg'>
            <img src={countryFlag} alt="" />
        </div>
        <div className='countryDetails'>
            <h4>{countryName}</h4>
            <div><b>Population : {population}</b></div>
            <div>Region : {region}</div>
            <div>Capital : {capital}</div>
        </div>
        </div>
    </>
  )
}
