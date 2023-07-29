import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import "./CountryDetailsPage.css"
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

export default function CountryDetailsPage({ countries }) {
    const { id } = useParams()
    const [darkTheme, setDarkTheme] = useContext(ThemeContext);
    const currentCountry = countries.find(country => country.cca3 === id);

    if(currentCountry === undefined){
        return <h2>Country not found...</h2>
    }

    return (
        <>
            <div className= {darkTheme &&  'countryDetail darkMode' || 'countryDetail' }>
                <div className='back-btn'>
                    <Link to={"/"}>
                        <button>Back Button</button>
                    </Link>
                </div>

                <div className='CountryInfo'>
                    <div>
                        <img src={currentCountry.flags.svg} alt="" />
                    </div>
                    <div className='CountryInfoText'>
                        <h1>Name : {currentCountry.name.common}</h1>

                        <p>Native name : {Object.values(currentCountry.name.nativeName)[0].official}</p>

                        <p>Population : {currentCountry.population}</p>

                        <p>Capital : {currentCountry.capital}</p>

                        <p>Sub-region : {currentCountry.subregion}</p>

                        <p>Top Level Domain : {currentCountry.tld}</p>

                        <p>Currency : {Object.values(currentCountry.currencies)[0].name}</p>

                        <p>Language : {Object.values(currentCountry.languages).join(", ")}</p>

                    </div>
                    
                    <div  className={darkTheme &&  'border darkMode' || 'border' }>
                    <b>Border Countries</b>
                        <div>
                        {currentCountry.borders.map((item) => {
                            return <Link to={`/Country/${item}`}><button className='border-btn' key={item}>{item}</button> </Link>
                            // console.log(item);
                        })}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
