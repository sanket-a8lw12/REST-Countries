import { useContext } from "react"
import { ThemeContext } from './../App';
import { Link } from 'react-router-dom';

export const CountryCard = ({ countryFlag, countryName, population, region, capital, id }) => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  return (
    <>
      <Link to={`/Country/${id}`}>
        <div className={darkTheme && 'countryCard darkMode' || 'countryCard'} >
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
      </Link>
    </>
  )
}
