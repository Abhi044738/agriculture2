import axios from "axios";
import { useEffect, useState } from "react";
import { cropData } from "../../Assets/Data/botData";
import "./style.css";

export const LocationComponent = () => {
  const [location, setLoacation] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLoacation({ latitude, longitude });
          sendLocation(latitude, longitude);
        });
      } else {
        prompt("Geolocation is not supported by your browser !!!!");
      }

      const sendLocation = (latitude, longitude) => {
        console.log("done");
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum`
            );
            console.log(response.data.daily);
            const maxRainfall = response.data.daily.precipitation_sum.reduce(
              (acc, item) => (item > acc ? item : acc),
              0
            );
            const maxTemperature =
              response.data.daily.temperature_2m_max.reduce(
                (acc, item) => (item > acc ? item : acc),
                0
              );
            const minTemperature =
              response.data.daily.temperature_2m_min.reduce(
                (acc, item) => (item < acc ? item : acc),
                9999999999
              );
            setApiResponse({ maxRainfall, minTemperature, maxTemperature });
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      };
    };
    getUserLocation();
  }, []);
  return (
    <div>
      <h2>User Location</h2>
      {location && (
        <div>
          <h5>Latitude: {location.latitude}</h5>
          <h5>Longitude: {location.longitude}</h5>
        </div>
      )}
      <h2>Weather details</h2>
      {apiResponse != undefined ? (
        <div>
          <h5>Max rainfall :{apiResponse.maxRainfall} mm</h5>
          <h5>Max temperature :{apiResponse.maxTemperature} C</h5>
          <h5>Min temperature :{apiResponse.minTemperature} C</h5>
          <div className="list">
            <h2>List of sutable crop.</h2>
            {cropData
              .filter(
                (item) =>
                  item.minTemp <= apiResponse.minTemperature &&
                  item.maxTemp >= apiResponse.maxTemperature
              )
              .map((item) => (
                <div className="list-item">
                  <p> {item.crop}</p>
                  <p>
                    {item.precipitation > apiResponse.maxRainfall
                      ? "If grown  recomend need irrigation"
                      : "Don't recomend to irrigate"}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
