import './App.css'
import React from 'react';
import { useState, useEffect } from 'react'

import { Countries } from "./component/Countries"
import { Header } from './component/Header';
import { SearchBar } from './component/SearchBar';


export const ThemeContext = React.createContext();



function App() {



  const [darkTheme, setDarkTheme] = useState(false);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [subRegion, setSubRegion] = useState('');
  const [sortChange, setSortChange] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  const [myStyle, setMyStyle] = useState({
    // color: "black",
    // backgroundColor: 'white'
  })





  const toggleStyle = () => {
    if (darkTheme) {
      setDarkTheme(false);
    }
    else {
      setDarkTheme(true);
    }
  
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      }).then((countryData) => {
        setCountries(countryData);
        setIsLoaded(true);
      }).catch(error => {
        console.error(error);
        setError(error.message);
      })
  }, [])



  let filteredRegion = countries.filter((country) => {
    return country.region.toLowerCase().includes(region.toLowerCase());
  })


  let regionList = [...countries.reduce((acc, curr) => {
    return acc.add(curr.region)
  }, new Set())]

  console.log(regionList);



  // code for subRegion
  let subRegionList = [];

  if (region !== '') {
    subRegionList = [...filteredRegion.reduce((acc, curr) => {
      return acc.add(curr.subregion)
    }, new Set())]
  }




  // function for subregion
  const subRegionCountries = filteredRegion.filter((item) => {
    return item.subregion?.toLowerCase().includes(subRegion.toLowerCase());
  })




  let displayCountries = subRegionCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchResult.toLowerCase());
  })


  function sortAll(content, contentType, sortType) {
    if (sortType === 'Ascending') {
      return content.sort((countryOne, countryTwo) => {
        return countryOne[contentType] - countryTwo[contentType];
      })
    }
    else if (sortType === 'Descending') {
      return content.sort((countryOne, countryTwo) => {
        return countryTwo[contentType] - countryOne[contentType];
      })
    }
  }


  function sortFunction(data, condition) {
    const sortType = condition.split('-')[0];
    const contentType = condition.split('-')[1]; //value="Ascending-population"
    sortAll(data, contentType, sortType);
  }

  // code for sorting the data

  if (sortChange !== '') {
    sortFunction(displayCountries, sortChange);

  }


  if (error !== '') {
    return <h2>{error}</h2>
  }

  return (
    <>

      {!isLoaded ? <h2 id='Loading'>Loading the data...</h2> :

        (
          <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>

            <div className={darkTheme && 'main-container darkMode' || 'main-container'}>
              <Header toggleStyle={toggleStyle} myStyle={myStyle} />

              < SearchBar
                setRegion={setRegion}
                searchResult={searchResult}
                setSearchResult={setSearchResult}
                subRegionList={subRegionList}
                setSubRegion={setSubRegion}
                setSortChange={setSortChange}
                countries={countries}
                filteredRegion={filteredRegion}
                regionList = {regionList}
                toggleStyle={toggleStyle} myStyle={myStyle} />

              <Countries countries={displayCountries} error={error} myStyle={myStyle} />

            </div>
          </ThemeContext.Provider>
        )}


    </>
  )
}

export default App;