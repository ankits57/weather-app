import { useState,useEffect } from 'react';
import './App.css'
import WeatherCard from './WeatherCard';

const url = 'https://weatherapi-com.p.rapidapi.com/current.json';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1c0810330emsh3d91a3a9199d418p11ac71jsn3d888c720a4e',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};



function App() {
  const [city, setCity] = useState('Patna');
  const [cityData, setCityData] = useState([]);
  useEffect(() => {
    search(city);
  }, []);

  const search = async(city) => {
    const response = await fetch(`${url}?q=${city}`, options);
    const data = await response.json();
    console.log(data);
    setCityData(data);
  }

  return (
    <>
      <div className='header'>
        <input type='text' placeholder='Search for City' value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={() => search(city)}>Search</button>
      </div>

      {
        cityData?.location?.name
          ? (
            <div className='weather-container'>
              <WeatherCard city={cityData} />
            </div>
          ) : (
            <div className='error'>
                <h1>Location not found</h1>
            </div>
            
          )
      }
      
    </>
  )
}

export default App
