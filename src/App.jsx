
// import React from 'react'
//  import './App.css'
// import Card from './Components/Card'
// import Input from './Components/Input'
// import Button from './Components/Button'
// import { useWeather } from './Context/Weather'

// function App() {
//   return (
//     <div className='App'>
//       <h1>weather app</h1>
//       <Card/>
//       <Input/>
//       <Button onClick ={Weather.fetchData} value="search"/>
//       <Button value="refresh"/>
     
//     </div>
//   )
// }

// export default App



// 

import { useEffect } from "react";
import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useWeather } from "./Context/Weather";

import "./App.css";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
