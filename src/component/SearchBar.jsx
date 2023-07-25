import React from 'react'

export const SearchBar = ({ setRegion, searchResult, setSearchResult }) => {
    const handleSearchResult = (event) => {
        setSearchResult(event.target.value)
    }

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    }

    return (
        <div className='search' >
            <input onChange={handleSearchResult} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                value={searchResult} />

            <div className="dropdown">
                <select id='dropdown' onChange={handleRegionChange}>
                    <option value="">Select An Option</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctic">Antarctic</option>
                </select>
            </div>


        </div>
    )
}
