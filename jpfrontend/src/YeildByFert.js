import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer ,Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];  // Define your colors here

const YieldByFert = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('augmented_data.json')
      .then(response => response.json())
      .then(data => {
        const fertilizers = [...new Set(data.map(item => item.fertilizers))];
        console.log('Fertilizers:', fertilizers);
        fetchFertilizerYieldCounts(fertilizers);
      })
      .catch(error => {
        console.log('Error fetching augmented_data.json:', error);
      });
  }, []);

  const fetchFertilizerYieldCounts = async (fertilizers) => {
    try {
      const promises = fertilizers.map(fertilizer => 
        axios.get('http://localhost:3000/ledger/total-yield-by-fertilizer', {
          params: { fertilizer }
        }).then(response => {
          console.log('API Response for', fertilizer, ':', response.data);
          return {
            name: fertilizer,
            count: response.data.count
          };
        })
      );

      const results = await Promise.all(promises);
      console.log('Chart Data:', results);
      setChartData(results);
    } catch (error) {
      console.error('Error fetching fertilizer yield counts:', error);
    }
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YieldByFert;
