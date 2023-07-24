import  {CountryCard}  from './CountryCard'

export const Countries = ({countries}) => {

    return (
        <div className='container'>

        {countries.map((country)=>{
            return <CountryCard countryFlag={country.flags.png} countryName={country.name.common} population={country.population}
           region={country.region} capital={country.capital} />
        })}

        </div>
    )
}
