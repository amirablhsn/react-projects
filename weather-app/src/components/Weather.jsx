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
      <img className="weather-icon" src={clear_icon} alt="" />
      <p className="temperature">20°C</p>
      <p className="location">Toronto, ON, CA</p>
    </div>
  ) 
}

export default Weather
