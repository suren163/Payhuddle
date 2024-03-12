import React, { useEffect, useState } from 'react'
import ApiData from './ApiData'

const App = () => {
  const [data, setData] = useState([]);
  const API_URL = 'http://localhost:8000/users';
  useEffect(()=>{
    const fetchData =  async() =>{
      try{
      const res = await fetch(API_URL)
      const response = await res.json()
      setData(response);
      }
      
      catch
      {
        console.log("Error");
      }
    }
    fetchData()
  }
  ,[])
  return (
  <>
    <ApiData
    data = {data}
    />
    </>
  )
}

export default App