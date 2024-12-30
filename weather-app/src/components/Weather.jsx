import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import clouds_icon from '../assets/clouds.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        <img className="search-icon" src={search_icon} alt="Search Icon" />
      </div>
      <p className="location">Toronto, ON, CA</p>
      <img className="weather-icon" src={clear_icon} alt="" />
      <p className="temperature">20°C</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <span>Humidity</span>
            <p>91%</p>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <span>Wind Speed</span>
            <p>10 km/h</p>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Weather
