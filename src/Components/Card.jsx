/* eslint-disable no-unused-vars */

 

import React from "react";
import { useWeather } from "../Context/Weather";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="Card">
      <img src={weather?.data?.current?.condition?.icon} />
      <h2>{weather.data?.current?.temp_c}. C</h2>
      <h5>
        {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
        {weather.data?.location?.country},{weather.data?.location?.localtime}
      </h5>
    </div>
  );
};

export default Card;