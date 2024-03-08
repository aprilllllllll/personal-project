import { useEffect, useState } from "react"


export default function Weather({latitude,longitude}){

const APIkey = 'ed61938a08d74ccd86f225845240703';

const [weather,setWeather] = useState();
useEffect(() => {
          fetch(`https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => console.error("Error fetching data:", error))},[])
        


return <>
{console.log(weather)}


<p>{latitude}</p>
<p>{longitude}</p>
</>
}