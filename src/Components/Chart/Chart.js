import React, { useEffect, useState } from 'react';
import {fetchDailyData} from "../../api/index";
import {Line, Bar} from "react-chartjs-2"
import "../Chart/Chart.css"



export const Chart = ({data:{confirmed,recovered,deaths},country}) => {
  
    const [dailyData,setDailyData]=useState([])
    useEffect(()=>{
        const fetchAPI=async ()=>{
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
    },[])

    const barChart=(
    confirmed ?
        (<Bar
        data={{labels:["Infected","Recovered","Deaths"],
    datasets:[{
        label:"People",
        backgroundColor:["blue","orange","red"],
        data:[confirmed.value,recovered.value,deaths.value]
    }]}}
        options={{
            legend:{display:false},
            title:{display:true,text:`current state in ${country}`}

        }}/>):null
    )

    const lineChart = dailyData.length ? (
      <Line 
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "infected",
              borderColor: "blue",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "deaths",
              borderColor: "red",
              backgroundColor: "grey",
              fill: true,
            },
          ],
        }}
      ></Line>
    ) : null;


    return (
      <div className="container">
        <div className="chart">{lineChart}</div>
        <div className="chart">{barChart}</div>
      </div>
    );
}
