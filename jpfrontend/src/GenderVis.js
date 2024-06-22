import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];  // Define your colors here

const GenderVis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/MOCK_DATA (1).json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const femaleCount = data.filter(item => item.gender === 'female' && item.role=="farmer").length;
  const maleCount = data.filter(item => item.gender === 'male'&& item.role=="farmer").length;
  const othersCount = data.filter(item => item.gender === 'others'&& item.role=="farmer").length;
  
  const obj = [
    { name: "female", count: femaleCount },
    { name: "male", count: maleCount },
    { name: "others", count: othersCount }
  ];

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={obj}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="count"
            nameKey="name"
            label
          >
            {obj.map((entry, index) => (
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

export default GenderVis;
