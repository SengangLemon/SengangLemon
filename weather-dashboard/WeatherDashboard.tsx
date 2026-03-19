import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDashboard: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [city, setCity] = useState<string>('');

    const fetchWeather = async () => {
        const API_KEY = 'YOUR_API_KEY';
        if(city) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            setWeather(response.data);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [city]);

    return (
        <div>
            <h1>Weather Dashboard</h1>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherDashboard;