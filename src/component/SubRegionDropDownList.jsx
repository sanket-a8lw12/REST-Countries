import React from 'react'

export const SubRegionDropDownList = ({ subRegionList, setSubRegion }) => {
    const handleSubRegionChange = (event) => {
        setSubRegion(event.target.value);
    }
    return (
        <div className="dropdownOption">
            <select onChange={handleSubRegionChange} className="searchBarWidth">
                <option value="">Select Subregion</option>
                {subRegionList.map((item) => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
