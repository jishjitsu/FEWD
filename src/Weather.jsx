import React, { useState, useEffect } from "react";
import { WiDaySunny, WiCloudy, WiRain, WiDayCloudy } from "react-icons/wi";

const weatherData = [
  { city: "New York", temperature: 15, condition: "Cloudy" },
  { city: "London", temperature: 12, condition: "Rainy" },
  { city: "Tokyo", temperature: 20, condition: "Sunny" },
  { city: "Sydney", temperature: 25, condition: "Clear" }
];

const getRandomTempChange = () => (Math.random() * 2 - 1).toFixed(1);

const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Sunny":
      return <WiDaySunny className="text-yellow-400 text-6xl" />;
    case "Cloudy":
      return <WiCloudy className="text-gray-500 text-6xl" />;
    case "Rainy":
      return <WiRain className="text-blue-500 text-6xl" />;
    case "Clear":
      return <WiDayCloudy className="text-blue-300 text-6xl" />;
    default:
      return <WiCloudy className="text-gray-500 text-6xl" />;
  }
};

const WeatherCard = ({ city, temperature, condition }) => {
  return (
    <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-3xl p-6 w-80 flex flex-col items-center text-gray-800 transition-all duration-500">
      {getWeatherIcon(condition)}
      <h2 className="text-xl font-semibold mt-2">{city}</h2>
      <p className="text-4xl font-bold my-2">{temperature}°C</p>
      <p className="text-lg text-gray-700">{condition}</p>
    </div>
  );
};

const Weather = () => {
  const [liveWeather, setLiveWeather] = useState(weatherData);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveWeather((prevWeather) =>
        prevWeather.map((data) => ({
          ...data,
          temperature: (parseFloat(data.temperature) + parseFloat(getRandomTempChange())).toFixed(1),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-400 to-blue-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-white shadow-md">☁️ Live Weather Updates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {liveWeather.map((data, index) => (
          <WeatherCard 
            key={index} 
            city={data.city} 
            temperature={data.temperature} 
            condition={data.condition} 
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;