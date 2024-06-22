import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];  // Define your colors here

const AreaPie = () => {
  const [wholedata, setwholeData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('augmented_data.json')
      .then(response => response.json())
      .then(data => {
        setwholeData(data);
        const irrigationMethods = [...new Set(data.map(item => item.areaPloughed))];
        console.log(irrigationMethods)
        fetchIrrigationMethodCounts(irrigationMethods);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const fetchIrrigationMethodCounts = async (irrigationMethods) => {
    try {
      const promises = irrigationMethods.map(irrigationMethod => 
        axios.get('http://localhost:3000/ledger/count-by-irrigation-method', {
          params: { irrigationMethod }
        }).then(response => ({
          name: irrigationMethod,
          count: response.data.count
        }))
      );

      const results = await Promise.all(promises);
      setChartData(results);
    } catch (error) {
      console.error('Error fetching irrigation method counts:', error);
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

export default IrrigationMethod;
