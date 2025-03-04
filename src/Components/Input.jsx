/* eslint-disable no-unused-vars */
// import React from 'react'
// import { useWeather } from '../Context/Weather'


// const Input=()=> {
//   //const [searchCity, setSearchCity] = useState("");
// //const weather = { searchCity, setSearchCity };

//     const weather =useWeather()
//     console.log("Weather",weather)
//   return (
//    <input  
//    className='input-field'
//    placeholder="search here "
//    value ={weather.searchcity}
//    onChange={(e)=>weather.searchsetcity(e.target.value)}
   
   
//    />
   
   
  
//   )
// }

// export default Input


import React from "react";
import { useWeather } from "../Context/Weather";
const Input = () => {
  const weather = useWeather();

  return (
    <input
      className="input-field"
      placeholder="Search here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
