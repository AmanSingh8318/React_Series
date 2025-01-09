import React, { useState } from 'react';
import UseWeatherData from '../Api/Use_weatherData';
import Toggle from '../Toggle/Toggle';


export default function Ui_weather(props) {
  const [city, setCity] = useState('');
  const [input, setInput] = useState('');
  const [data, error, loading] = UseWeatherData({ name: city });

  if (error) {
    throw new Error("error");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        setCity(input);
    setInput(''); // reset

    
  };

  console.log("data in ui", data);

  return (
    <div className='main'>
      <div className='top-icon'>
        <p className='p1'>icons</p>
        {data && <p className='p2'>locations: {data.name}</p>}
        <Toggle /> 
      </div>
      <div className="from">
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
          />
          <button className='btn' type='submit'>Search</button>
        </form>
      </div>
     
      <div className="body">
        <h2>Todays Report</h2>
        <img src="" alt="weather imgs" />

        <div className="report">
          <p>information</p>
          <h2>degree</h2>
        </div>
        <div className="info_icons">
          <div className="mini_icon">
            <img src="" alt="" />
            {data && data.wind && <p>speed: {data.wind.speed} km</p>}
            {data && data.wind && <p>Degree: {data.wind.deg}</p>}
          </div>
          <div className="mini_icon2">
            <img src="" alt="" />
            {data && data.weather && data.weather[0] && <p>Descriptions: {data.weather[0].description}</p>}
            <p>sun</p>
          </div>
          <div className="mini_icon3">
            <img src="" alt="" />
            {data && data.main && <p>Humidity: {data.main.humidity}</p>}
            {data && data.main && <p>Temperature: {data.main.temp}</p>}
            {data && data.sys && <p>Country: {data.sys.country}</p>}
            {data && data.sys && <p>Sunrise: {data.sys.sunrise }</p>}
          </div>
        </div>
      </div>
      <div className="social_icon">
        <div className="icon">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}