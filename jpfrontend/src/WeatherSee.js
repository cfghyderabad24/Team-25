import React, { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

function Bot() {
  // State variables and API URL
  let [data, setdata] = useState({});
  let [location, setlocation] = useState('');
  const apiKey = ''; // Consider using an environment variable for the API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  // Function to handle location search
  const searchlocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
        .then((response) => {
          setdata(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching the weather data:', error);
        });
      setlocation('');
    }
  }

  return (
    <div>
        <Navigation/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Weather</h1>
          <div>
            <input
              type='text'
              value={location}
              onChange={event => setlocation(event.target.value)}
              onKeyPress={searchlocation}
              placeholder='Search Location'
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '20px' }}
            />
          </div>
          <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{data.name}</h1>
          <div>
            {data.main ? <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{data.main.temp}°F</h1> : null}
          </div>
          <div style={{ marginBottom: '50px' }}>
            {data.weather ? <h3 style={{ fontWeight: 'bold' }}>{data.weather[0].main}</h3> : null}
          </div>
          {data.name !== undefined &&
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <h3>Feels Like</h3>
                {data.main ? <p style={{ marginTop: '5px', fontSize: '14px' }}>{data.main.feels_like}</p> : null}
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3>Humidity</h3>
                {data.main ? <p style={{ marginTop: '5px', fontSize: '14px' }}>{data.main.humidity}</p> : null}
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3>Wind</h3>
                {data.wind ? <p style={{ marginTop: '5px', fontSize: '14px' }}>{data.wind.speed} MPH</p> : null}
              </div>
            </div>}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Bot;
