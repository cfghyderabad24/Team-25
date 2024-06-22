import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';

// Define a larger array of colors
const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', 
  '#FFCE56', '#AA66CC', '#33B5E5', '#FF4444', '#99CC00', '#FFBB33', 
  '#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC', '#00ACC1'
];

const CountByCrop = () => {
  const [wholedata, setWholeData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('augmented_data.json')
      .then(response => response.json())
      .then(data => {
        setWholeData(data);
        const allCrops = [...new Set(data.map(item => item.crop))];
        console.log(allCrops);
        fetchCropCounts(allCrops);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const fetchCropCounts = async (allCrops) => {
    try {
      const promises = allCrops.map(crop => 
        axios.get('http://localhost:3000/ledger/count-by-crop', {
          params: { crop }
        }).then(response => ({
          name: crop,
          count: response.data.count
        }))
      );

      const results = await Promise.all(promises);
      setChartData(results);
    } catch (error) {
      console.error('Error fetching crop counts:', error);
    }
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={125}
            fill="#8884d8"
            dataKey="count"
            nameKey="name"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CountByCrop;
