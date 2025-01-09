import { useEffect, useState } from "react";

export default function UseWeatherData({ name }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


    const api_key = "9e50e0dd4c8a699083a2e0e96eb26480";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`;
   useEffect(()=>{
        setLoading(true)
         try {
             fetch(url).
             then((res)=>{
                return res.json();  // return string as a json format 
             })
             .then((new_data)=>{

                console.log("data after resolve the promises",new_data);
                setData(new_data);
             })
         } catch (error) {
            setError(error)
         }
         finally{
            setLoading(false)
         }
   },[name])
    
  return [ data, error, loading ];
 
   
}

