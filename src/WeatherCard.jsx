import React from 'react'

const WeatherCard = ({city}) => {
  return (
      <div className='data'>
          <div className='basic-data'>
              <img src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt={city.location.name} />
              <h1>{city.location.name}, {city.location.region}</h1>
              <h2>{city.location.country}</h2>
              <h3>Time Zone : {city.location.tz_id}</h3>
              <h3>Local Time : {city.location.localtime}</h3>
              <h3>Latitude : {city.location.lat}</h3>
              <h3>Longitude : {city.location.lon}</h3>
          </div>
          <div className='temp'>
              <h1>Temperature Data </h1>
              <h2>{city.current.is_day === 0 ? 'Night' : 'Day'}</h2>
              <h2>Condition : <span style={{ color: '#352F44' }}>{city.current.condition.text}</span></h2>
              <h2>Temperature : <span style={{ color: '#352F44' }}>{city.current.temp_c}°C / {city.current.temp_f}°F</span></h2>
              <h2>Cloud Coverage : <span style={{ color: '#352F44' }}>{city.current.cloud}% </span></h2>
              <h2>Wind Direction : <span style={{ color: '#352F44' }}>{city.current.wind_dir}, {city.current.wind_kph} kmph </span></h2>
              <h2>Visiblity : <span style={{ color: '#352F44' }}>{city.current.vis_km} km </span></h2>
              <h2>Last Updated : <span style={{ color: '#352F44' }}>{city.current.last_updated} </span></h2>
          </div>
       </div>
  )
}

export default WeatherCard