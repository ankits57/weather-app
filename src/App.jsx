import { useState,useEffect } from 'react';
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
    setCityData(data);
  }

  return (
    <>
      <h1 className="mb-2 mt-2 text-3xl text-center sm:text-5xl font-medium leading-tight text-primary">Weather App</h1>
      <div className="flex flex-row justify-center gap-2">
            <input type="text" placeholder="Search For City" value={city} onChange={(e) => setCity(e.target.value)} className="block m-1 mt-2 w-96 sm:mt-10 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            <button onClick={() => search(city)} className="px-5 py-2 mt-2 sm:mt-10 m-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Search</button>
      </div>
      {
        cityData?.location?.name
          ? (
            <div className='flex mt-5 flex-col justify-center sm:flex-row '>
              <WeatherCard city={cityData} />
            </div>
          ) : (
            <div className='text-xl text-center'>
                <h1>Location not found</h1>
            </div>
            
          )
      }
    </>
  )
}

export default App
