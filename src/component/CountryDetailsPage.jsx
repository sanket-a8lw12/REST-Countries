import React from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom';

export default function CountryDetailsPage({countries}) {
    const {id} = useParams()

    const currentCountry = countries.find(country => country.cca3 === id);
    // console.log("-+-=-=-=-=-")
    // console.log(Object.values(currentCountry.name.nativeName)[0].official);

  return (
    <>
    <div>
        <div>
           <Link to={"/"}>
           <button>Back Button</button>
           </Link> 
        </div>
        <div>
            <div>
            <img src={currentCountry.flags.svg} alt="" />
            </div>
            <div>
                <p>Name : {currentCountry.name.common}</p>
        
                <p>Native name : {Object.values(currentCountry.name.nativeName)[0].official }</p>

            </div>

            <div>

            {currentCountry.borders.map((item)=>{
                    return <Link to={`/Country/${item}`}><button key={item}>{item}</button> </Link>
                    // console.log(item);
                })}
            </div>
        </div>
    </div>


    </>
  )
}
