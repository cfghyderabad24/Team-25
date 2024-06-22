import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AgeVis = () => {
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

  const ageGroups = [
    { name: "Above 20", count: data.filter(item => item.age >= 20 && item.role=="farmer").length },
    { name: "Above 30", count: data.filter(item => item.age >= 30 && item.role=="farmer").length },
    { name: "Above 40", count: data.filter(item => item.age >= 40 && item.role=="farmer").length },
    { name: "Above 50", count: data.filter(item => item.age >= 50 && item.role=="farmer").length },
    { name: "Above 60", count: data.filter(item => item.age >= 60 && item.role=="farmer").length },
    { name: "Above 70", count: data.filter(item => item.age >= 70 && item.role=="farmer").length },
    { name: "Above 80", count: data.filter(item => item.age >= 80 && item.role=="farmer").length },
    { name: "Above 90", count: data.filter(item => item.age >= 90 && item.role=="farmer").length }
  ];

  return (
    <div style={{ width: '75%', height: 350 }}>
      <ResponsiveContainer>
        <BarChart data={ageGroups}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgeVis;
