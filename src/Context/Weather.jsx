
/* eslint-disable react/prop-types */

// import { createContext,useContext,useState } from "react";
// const WeatherContext=createContext(null);
// import {getWeatherdataforcity} from "src./api";
// export const WeatherProvider=(props)=>{
//     const [data,setdata] =useState(null)
//     const [searchcity,setsearchcity]=useState(null)
//     const fetchData =async ()=>{
//         const response =await getWeatherdataforcity(searchcity)
//         setdata(response);
//     };


//     return < WeatherContext.Provider value ={{searchcity,data,setsearchcity,fetch}}>
    
//     {props.children}
//     </ WeatherContext.Provider>
// };

// export const useWeather =() =>{
    
//     return useContext(WeatherContext);
// };


// import { createContext, useContext, useState } from "react";
// import { getWeatherdataforcity } from "../Api"; // Adjusted import path

// const WeatherContext = createContext(null);

// export const WeatherProvider = ({ children }) => {
  
//   const [data, setData] = useState(null); // Fixed capitalization of `setData`
//   const [searchcity,setsearchcity] = useState(""); // Initialized with an empty string for better default behavior

//   // eslint-disable-next-line no-unused-vars
  
//   const fetchData = async () => {
//     //if (!searchcity.trim()) { // Ensures no empty or whitespace-only cities
//       if (typeof searchcity === 'string' && searchcity.trim() !== '') {
      
//       console.error("Search achha city is not set or is invalid.");
//       return;
//     }
//     try {
//       const response = await getWeatherdataforcity(searchcity);
//       setData(response);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };
//   //const city = document.getElementById("city-input").value;

//   return (
//     <WeatherContext.Provider
//       value={{
//         searchcity,
//         data,
//         setsearchcity,
//         fetchData, // Ensure correct naming consistency
//       }}
//     >
//       {children} {/* Use destructured `children` for cleaner code */}
//     </WeatherContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useWeather = () => {
//   const context = useContext(WeatherContext);
//   if (!context) {
//       throw new Error("useWeather must be used within a WeatherProvider");
//   }
//   return context;
// };

import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity,getWeatherDataForLocation } from "../Api";
const WeatherContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
     
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};