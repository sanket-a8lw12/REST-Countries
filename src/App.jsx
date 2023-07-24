import './App.css'
import { useState, useEffect } from 'react'

import { Countries } from "./component/Countries"
import { Header } from './component/Header';
import { SearchBar } from './component/SearchBar';

function App() {

  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        setCountries(data);
      })

  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Header />
      < SearchBar />
      <Countries countries={countries} />
    </>
  )
}

export default App;
