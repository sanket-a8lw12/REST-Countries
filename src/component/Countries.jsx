import { CountryCard } from './CountryCard'

export const Countries = ({ countries, myStyle }) => {

    return (
        <div className='innerContainer' style={myStyle}>
            {countries.length === 0 ? <h1>Sorry no countries found...</h1> :
                (countries.map((country) => {
                    return < CountryCard countryFlag={country.flags.png} countryName={country.name.common} population={country.population}
                        region={country.region} capital={country.capital} key={country.name.common} />
                }))}

        </div>
    )
}
