import React,{useEffect, useState} from 'react';
import { Cards } from './Components/Cards/Cards';
import { Chart } from './Components/Chart/Chart';
import { CountryPicker } from './Components/CountryPicker/CountryPicker';
import "./App.css";
import axios from 'axios';
import {fetchData} from "../src/api/index"
import { Header } from './Components/Header/Header';

function App() {
  const [info, setInfo] = useState({});
  const [country,setCountry]=useState();
  // async function fetchData() {
  //   const { data } = await axios.get("https://covid19.mathdro.id/api");
  //   const fetchedData = {
  //     confirmed: data.confirmed,
  //     recovered: data.recovered,
  //     deaths: data.deaths,
  //     lastUpdate: data.lastUpdate,
  //   };
  //   return fetchedData;
  // // }
  useEffect(() => {
    axios.get("https://covid19.mathdro.id/api")
    .then(res=>{console.log(res.data);setInfo(res.data)})
    .catch(err=>console.log(err));
    // setInfo(fetchData());
    // console.log(info);
  }, []);

  const handleCountryChange=async(country)=>{
    const fetcheddata=await fetchData(country);
    setInfo(fetcheddata);
    console.log(fetcheddata);
    console.log(country)
  }

  return (
    <div className="container">
      <Header />
      <Cards data={info} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  
      <Chart data={info} country={country} />
    </div>
  );
}

export default App;
