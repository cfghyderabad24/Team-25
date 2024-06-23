// ChampStories.js
import React, { useState, useEffect } from 'react';
import ChampCard from './ChampCard';

function ChampStories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./champstories.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Champ Stories</h1>
      <div className="card-container">
        {data.map((item, index) => (
          <ChampCard
            key={index}
            title={item.title}
            text={item.paragraph}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ChampStories;
