// // eslint-disable-next-line no-unused-vars
// const baseURL="https://api.weatherapi.com/v1/current.json?key=8c4a9fcc912b4077924182613252301"

// // eslint-disable-next-line no-unused-vars
// export const getWeatherdataforcity= async (city)=>{
//     const response=await fetch('${baseURL}&q=${city}& =yes')
//     return await response.json();
// };

// const baseURL = "https://api.weatherapi.com/v1/current.json?key=8c4a9fcc912b4077924182613252301&q=New York&aqi=yes"

// export const getWeatherdataforcity = async (city)=>{ // Initialized with an empty string for better default behavior

//   try {
//     const response = await fetch(`${baseURL}&q=${encodeURIComponent(city)}&aqi=yes`);
//     if (!response.ok) {
//       throw new Error(`Error fetching weather data: ${response.statusText}`);
//     }
//     return await response.json();

//   } catch (error) {
//     console.error("Error:", error);
//     throw error; // Re-throw the error to handle it upstream
//   }
// };

const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=8c4a9fcc912b4077924182613252301";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};


