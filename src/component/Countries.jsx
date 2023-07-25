import  {CountryCard}  from './CountryCard'

export const Countries = ({countries, myStyle}) => {

    return (
        <div className='innerContainer'>

        {countries.map((country)=>{
            return < CountryCard countryFlag={country.flags.png} countryName={country.name.common} population={country.population}
           region={country.region} capital={country.capital} key={country.name.common}/>
        })}

        </div>
    )
}
