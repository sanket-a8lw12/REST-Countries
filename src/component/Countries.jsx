import { CountryCard } from './CountryCard'
import { useContext } from "react"
import {ThemeContext} from './../App';
import { Link } from 'react-router-dom';

export const Countries = ({ countries, myStyle, error }) => {
    
    const [darkTheme, setDarkTheme] = useContext(ThemeContext);
        

    return (
        <div className= {darkTheme &&  'innerContainer darkMode' || 'innerContainer'} >
            {countries.length === 0 ? <h2>Sorry no countries found...</h2> :
                (countries.map((country) => {
                    return < CountryCard countryFlag={country.flags.png} countryName={country.name.common} population={country.population}
                        region={country.region} capital={country.capital} key={country.name.common}  id={country.cca3}/>
                }))}

        </div>
    )
}
