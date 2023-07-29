import React from 'react'

export const RegionDropDownList = ({ setRegion, setSubRegion, regionList }) => {

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
    setSubRegion('');
  }
  return (

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
