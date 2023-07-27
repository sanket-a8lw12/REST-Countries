import { useContext } from "react"
import {ThemeContext} from './../App';

export const SearchBar = ({ setRegion, searchResult, setSearchResult, subRegionList,
    setSubRegion, setSortChange }) => {

        const [darkTheme, setDarkTheme] = useContext(ThemeContext);

    const handleSearchResult = (event) => {
        setSearchResult(event.target.value)
    }

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
        setSubRegion('');
    }

    const handleSortChange = (event) => {
        setSortChange(event.target.value);
    }

    const handleSubRegionChange = (event) => {
        setSubRegion(event.target.value);
    }


    return (
        <div className= {darkTheme &&  'search darkMode' || 'search'}>
            <input onChange={handleSearchResult} className="searchBarWidth" type="search" placeholder="Search" aria-label="Search"
                value={searchResult} />

            <div className="dropdownOption">
                <select id='dropdown' onChange={handleSortChange} className="searchBarWidth">
                    <option value="">Sort</option>
                    <option value="Ascending-population">Ascending population</option>
                    <option value="Descending-population">Descending population</option>
                    <option value="Ascending-area">Ascending area</option>
                    <option value="Descending-area">Descending area</option>
                </select>
            </div>


            <div className="dropdownOption">
                <select id='dropdown' onChange={handleRegionChange} className="searchBarWidth">
                    <option value="">Select Region</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Antartica">Antartica</option>
                </select>
            </div>



            <div className="dropdownOption">
                <select onChange={handleSubRegionChange} className="searchBarWidth">
                    <option value="">Select Subregion</option>
                    {subRegionList.map((item) => {
                        // console.log(item)
                        // console.log("----------")
                        return <option key={item} value={item}>{item}</option>
                    })}
                </select>
            </div>


        </div>
    )
}
