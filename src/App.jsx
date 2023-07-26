import './App.css'
import { useState, useEffect } from 'react'

import { Countries } from "./component/Countries"
import { Header } from './component/Header';
import { SearchBar } from './component/SearchBar';

function App() {

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [subRegion, setSubRegion] = useState([]);
  const [sortChange, setSortChange] = useState("");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: 'white'
  })

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: 'white'
      })
    }
    else {
      setMyStyle({
        color: "white",
        backgroundColor: 'black'
      })
    }
  }

  // const fetchData = async () => {
    
  // }
 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      }).then((data) => {
        setCountries(data);
      })
  }, [])
  


  let filteredRegion = countries.filter((country) => {
    return country.region.toLowerCase().includes(region.toLowerCase());
  })

    //code for subRegion
  
    let subRegionList = filteredRegion.reduce((acc, curr)=>{
      let subRegion =  curr.subregion
       
        if(subRegion in acc){
          acc[subRegion].push(curr);
        }
        else{
          acc[subRegion] = [curr];
        }

        return acc;
    }, {});

    // poly: [india, america

  
  // console.log(subRegionList);
    useEffect(() =>{
      setSubRegion(Object.keys(subRegionList));
    }, [region]);



  let search = filteredRegion.filter((country) => {
    return country.name.common.toLowerCase().includes(searchResult.toLowerCase());
  })
  
  // code for sorting the data

  if(sortChange === "Ascending-population"){
    search.sort((countryOne, countryTwo)=>{
      return countryOne.population - countryTwo.population;    
    })
  }

  if(sortChange === "Descending-population"){
    search.sort((countryOne, countryTwo)=>{
      return countryTwo.population - countryOne.population;    
    })
  }

  if(sortChange === "Ascending-area"){
    search.sort((countryOne, countryTwo)=>{
      return countryOne.area - countryTwo.area;    
    })
  }

  if(sortChange === "Descending-area"){
    search.sort((countryOne, countryTwo)=>{
      return countryTwo.area - countryOne.area;    
    })
  }



  return (
    <div className='main-container'>
      <Header toggleStyle={toggleStyle} myStyle={myStyle} />
      
      < SearchBar 
      setRegion={setRegion} 
      searchResult={searchResult} 
      setSearchResult={setSearchResult}
      subRegion={subRegion} 
      setSubRegion={setSubRegion} 
      setSortChange={setSortChange}/>
      <Countries countries={search} myStyle={myStyle} />
    </div>
  )
}

export default App;
