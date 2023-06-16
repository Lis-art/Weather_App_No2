import { useEffect, useState } from "react";
import "./Homepage.css";
const API_KEY = import.meta.env.VITE_API_KEY 

function Weather() {
    
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState("duesseldorf");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`)
            .then((response) => response.json())
            .then((weatherData) => {
                setWeatherData(weatherData);
            });
    }, [city]);

    if (weatherData === undefined) {
        return;
    }
    return (
        <div className="wrapper">
            <div className="city">
                <button type="button" onClick={() => setCity("duesseldorf")}>Düsseldorf</button>
                <button type="button" onClick={() => setCity("köln")}>Cologne</button>
                <button type="button" onClick={() => setCity("berlin")}>Berlin</button>
                <button type="button" onClick={() => setCity("hamburg")}>Hamburg</button>
            </div>
            <div className="output">
                <div className="description">
                    <p>{weatherData.weather[0].description} in {weatherData.name} </p>
                    <article>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                    alt={weatherData.weather[0].description}>
                    </img>
                    </article>
                </div>
                <p className="currentWeather">Current: {weatherData.main.temp}°</p>
                <p>Windspeed: {weatherData.wind.speed} mi/hr</p>
            </div>
        </div >
    );
}

export default Weather;