import React from 'react'

export const SortDropDownList = ({ setSortChange }) => {
    const handleSortChange = (event) => {
        setSortChange(event.target.value);
    }
    return (
        <div className="dropdownOption">
            <select id='dropdown' onChange={handleSortChange} className="searchBarWidth">
                <option value="">Sort</option>
                <option value="Ascending-population">Ascending population</option>
                <option value="Descending-population">Descending population</option>
                <option value="Ascending-area">Ascending area</option>
                <option value="Descending-area">Descending area</option>
            </select>
        </div>
    )
}
