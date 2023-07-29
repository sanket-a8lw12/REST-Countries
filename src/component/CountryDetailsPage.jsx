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
                <div>
                    <Link to={"/"}>
                        <button>Back Button</button>
                    </Link>
                </div>
                <div className='CountryInfo'>
                    <div>
                        <img src={currentCountry.flags.svg} alt="" />
                    </div>
                    <div>
                        <p>Name : {currentCountry.name.common}</p>

                        <p>Native name : {Object.values(currentCountry.name.nativeName)[0].official}</p>

                    </div>

                    <div>

                        {currentCountry.borders.map((item) => {
                            return <Link to={`/Country/${item}`}><button key={item}>{item}</button> </Link>
                            // console.log(item);
                        })}
                    </div>
                </div>
            </div>


        </>
    )
}
