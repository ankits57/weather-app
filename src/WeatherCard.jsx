import React from 'react'

const WeatherCard = ({city}) => {
    return (
        <>
        <div className="ml-2 mr-2 mb-2 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="p-6">
            <h3 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                City Information
            </h3>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               {city.location.name}, {city.location.region}
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Country :</span> {city.location.country}
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Time Zone :</span> {city.location.tz_id}
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Local Time :</span> {city.location.localtime}
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Latitude :</span> {city.location.lat}
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Longitude :</span> {city.location.lon}
            </p>
            </div>
            </div>

            <div className="ml-2 mr-2 mb-2 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="p-6">
            <h3 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Weather Information
            </h3>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               {city.current.is_day === 0 ? 'Night' : 'Day'}
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Condition :</span> {city.current.condition.text}
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Temperature :</span> {city.current.temp_c}°C / {city.current.temp_f}°F
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Cloud Coverage: </span> {city.current.cloud}% 
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Wind Direction :</span> {city.current.wind_dir}, {city.current.wind_kph} kmph
            </p>
            <p className="text-xl mb-1 text-base text-neutral-600 dark:text-neutral-200">
               <span className='text-black'>Visiblity :</span> {city.current.vis_km} km 
            </p>
            </div>
        </div>
        
        </>

  )
}

export default WeatherCard


// As promissed I have made it responsive using Tailwind CSS and Frontend is completely in React and API from Rapid API, however I think it's an overkill for basic react weather app