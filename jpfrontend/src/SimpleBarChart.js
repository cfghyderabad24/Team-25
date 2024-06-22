import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];  // Define your colors here

const SimplePieChart = () => {
  const [wholedata, setwholeData] = useState([]);
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('augmented_data.json')
      .then(response => response.json())
      .then(data => {
        setwholeData(data);
        const villageNames = [...new Set(data.map(item => item.villageName))];
        fetchVillageCounts(villageNames);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const fetchVillageCounts = async (villageNames) => {
    try {
      const promises = villageNames.map(villageName => 
        axios.get('http://localhost:3000/ledger/count-by-village', {
          params: { villageName }
        }).then(response => ({
          name: villageName,
          count: response.data.count
        }))
      );

      const results = await Promise.all(promises);
      setChartData(results);
    } catch (error) {
      console.error('Error fetching village counts:', error);
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
            outerRadius={150}
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

export default SimplePieChart;
