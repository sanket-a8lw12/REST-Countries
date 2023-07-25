import './App.css'
import { useState, useEffect } from 'react'

import { Countries } from "./component/Countries"
import { Header } from './component/Header';
import { SearchBar } from './component/SearchBar';

function App() {

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: 'white'
  })

  const toggleStyle = () =>{
    if(myStyle.color === "white"){
      setMyStyle({
        color: "black",
    backgroundColor: 'white'
      })
    }
    else{
      setMyStyle({
        color: "white",
    backgroundColor: 'black'
      })
    }
  }

  const fetchData = async () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      }).then((data) => {
        // console.log(data);
        setCountries(data);
      })

  }
  useEffect(() => {
    fetchData();
  }, []);


  let filteredRegion = countries.filter((country)=>{
    return country.region.toLowerCase().includes(region.toLowerCase());
})


let search = filteredRegion.filter((country)=>{
  return country.name.common.toLowerCase().includes(searchResult.toLowerCase());
})


  return (
    <div className='main-container'>
      <Header toggleStyle={toggleStyle} myStyle={myStyle}/>
      < SearchBar setRegion = {setRegion} searchResult={searchResult} setSearchResult={setSearchResult} />
      <Countries countries={search} myStyle={myStyle}/>
    </div>
  )
}

export default App;
