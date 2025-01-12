import React, { useEffect, useState } from 'react';
import UseWeatherData from '../Api/Use_weatherData';
import Toggle from '../Toggle/Toggle';
import notfoundImg from '../Ui_comp/assets/404.png';
import clear from '../Ui_comp/assets/clear.png';
import cloud from '../Ui_comp/assets/cloud.png';
import icons from '../Ui_comp/assets/download.png';
import dust from '../Ui_comp/assets/dust.png';
import hage from '../Ui_comp/assets/hage.png';
import humidity from '../Ui_comp/assets/humidity.png';
import location_icon from '../Ui_comp/assets/location2.png';
import mist from '../Ui_comp/assets/mist.png';
import desc from '../Ui_comp/assets/new_description.png';
import rain from '../Ui_comp/assets/rain.png';
import snow from '../Ui_comp/assets/snow.png';
import Speed from '../Ui_comp/assets/wind.png';
export default function Ui_weather(props) {
  const [city, setCity] = useState('');
  const [input, setInput] = useState('');
  const [data, error, loading] = UseWeatherData({ name: city });
  const[img,setImg]=useState();

  if (error) {
    throw new Error("error");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
        setCity(input);
    setInput(''); // reset
  };

     const img_des={
      "clear sky":clear,
       "rain ":rain,
       "cloud":cloud,
       "dust":dust,
       "hage":hage,
       "mist":mist,
       "snow":snow,
       "404":notfoundImg
     }
  useEffect(()=>{
    const description=data?.weather?.[0].description; 
    if (description && img_des[description]) {
      setImg(img_des[description])
    }
  },[data])
     
  console.log("data in ui", data);

  return ( 
   <>
    
         {/* <div> */}
         
         
         <div className='main'>
                      <div className='top-icon'>
                        <img 
                          style={{
                            height:"30px",
                            marginLeft:"0.4rem"
                          }}
                        src={location_icon}alt="" />
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

          <div className="first">
            <img src={img} alt="weather imgs" />
          </div>
        

        
                                <div className="info_icons">
                                  <div className="mini_icon">           
                                    <img src={Speed} alt="" />
                                    {data && data.wind && <p>speed: {data.wind.speed} km</p>}
                                    {data && data.wind && <p>Degree: {data.wind.deg}</p>}
                                  </div>
                                  <div className="mini_icon2">
                                    <img src={desc} alt="" />
                                    {data && data.weather && data.weather[0] && <p>Descriptions: {data.weather[0].description}</p>}
                                  </div>
                                  <div className="mini_icon3">
                                    <img src={humidity} alt="" />
                                    {data && data.main && <p>Humidity: {data.main.humidity}</p>}
                                    {data && data.main && <p>Tempe: {data.main.temp}</p>}
                                    
                                  </div>

          <div className="mini_icon4">
            <img src={icons} alt="" />
            {data && data.sys && <p>Country: {data.sys.country}</p>}
            {data && data.sys && (
            <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
)}
              {data && data.sys && (
           <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
)}

          </div>
        </div>
      </div>
      
    </div>
         
        

       
       
    </>

  );
}