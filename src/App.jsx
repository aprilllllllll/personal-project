import { useState, useEffect } from "react";
import Weather from "./component/Weather";

function App() {
  const [position, setPosition] = useState({
    // latitude: 43.6532,
    // longitude: 79.3832
  }); // set toronto as default location

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
      setPosition({
        latitude: 43.6532,
        longitude: 79.3832
      });
    }
  },[position]);
  return (
    <>
      <h1>hello</h1>
      {position?<Weather latitude={position.latitude} longitude={position.longitude} />:<div></div>}
      
    </>
  );
}

export default App;
