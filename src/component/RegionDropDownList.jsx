import React from 'react'

export const RegionDropDownList = ({ setRegion, setSubRegion, regionList }) => {

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
    setSubRegion('');
  }
  return (

    // <div className="dropdownOption">
    //   <select id='dropdown' onChange={handleRegionChange} className="searchBarWidth">
    //     <option value="">Select Region</option>
    //     <option value="Oceania">Oceania</option>
    //     <option value="Americas">Americas</option>
    //     <option value="Asia">Asia</option>
    //     <option value="Europe">Europe</option>
    //     <option value="Africa">Africa</option>
    //     <option value="Antartica">Antartica</option>
    //   </select>
    // </div>

<div className="dropdownOption">
<select onChange={handleRegionChange} className="searchBarWidth">
    <option value="">Select Region</option>
    {regionList.map((item) => {
        return <option key={item} value={item}>{item}</option>
    })}
</select>
</div>
  )
}
