import React,{useEffect, useState} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api/index'
import '../CountryPicker/CountryPicker.css'

export const CountryPicker = ({handleCountryChange}) => {
    const [fetchedData,setFetchedData]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>
        {
            setFetchedData(await fetchCountries());
            
        }
        fetchApi();
    },[setFetchedData])
    return (
      <div>
        <FormControl>
          <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="global">
           Select any country
            </option>
            {fetchedData.map((country, i) => (
              <option value={country} key={i}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    );
}
