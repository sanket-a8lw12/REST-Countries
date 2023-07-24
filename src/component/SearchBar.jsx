import React from 'react'

export const SearchBar = () => {
    return (
        <div className='search'>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

            <div className="dropdown">
            <select id='dropdown'>
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
