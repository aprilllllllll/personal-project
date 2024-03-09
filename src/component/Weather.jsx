import { useEffect, useState } from "react";

export default function Weather({ latitude, longitude }) {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  useEffect(() => {
    const fetchData = async () => {
      
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${import.meta.env.VITE_WEATHER_APIKEY}`
      )
        .then(res => res.json())
        .then(result => {
          setWeather(result.weather[0]);
          setLocation(result.name);
          console.log(result);
        });
    };
    fetchData();
  }, [latitude, longitude]);

  // console.log(weather.weather[0].main);
  let content = <p>Loading Weather</p>;
  if (weather != undefined) {
    content = <p>{weather.main}</p>;
  }
  return (
    <>
      <p>{latitude}</p>
      <p>{longitude}</p>
      {content}
    </>
  );
}
