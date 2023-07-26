export const SearchBar = ({ setRegion, searchResult, setSearchResult, subRegion, setSubRegion, setSortChange }) => {

    const handleSearchResult = (event) => {
        setSearchResult(event.target.value)
    }

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    }

    const handleSortChange = (event) => {
        setSortChange(event.target.value);
    }

    return (
        <div className='search' >
            <input onChange={handleSearchResult} className="searchBarWidth" type="search" placeholder="Search" aria-label="Search"
                value={searchResult} />

            <div className="dropdownOption">
                <select id='dropdown' onChange={handleSortChange}>
                    <option value="">Sort</option>
                    <option value="Ascending-population">Ascending population</option>
                    <option value="Descending-population">Descending population</option>
                    <option value="Ascending-area">Ascending area</option>
                    <option value="Descending-area">Descending area</option>
                </select>
            </div>


            <div className="dropdownOption">
                <select id='dropdown' onChange={handleRegionChange}>
                    <option value="">Select Region</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctic">Antarctic</option>
                </select>
            </div>



            <div className="dropdownOption">
                <select>
                    <option value="">Select Subregion</option>
                    {subRegion.map((item) => {
                        // console.log(item)
                        // console.log("----------")
                        return <option value="{item}">{item}</option>
                    })}
                </select>
            </div>


        </div>
    )
}
