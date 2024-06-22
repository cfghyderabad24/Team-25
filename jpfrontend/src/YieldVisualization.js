import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Navigation from './Navigation';
import { Nav } from 'react-bootstrap';

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const YieldVisualization = () => {
  const [yieldData, setYieldData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Replace this static data with Axios call to fetch data from your backend
    const staticData = [
      {
        dateOfHarvesting: '2023-01-15',
        yieldProduced: 300
      },
      {
        dateOfHarvesting: '2023-02-20',
        yieldProduced: 250
      },
      {
        dateOfHarvesting: '2023-03-18',
        yieldProduced: 320
      },
      {
        dateOfHarvesting: '2023-04-22',
        yieldProduced: 280
      }
    ];

    setYieldData(staticData);
    setLoading(false); // Set loading to false after data is set

    // Uncomment below code to fetch data from backend
    // Axios.get('http://localhost:8081/get-yield-data')
    //   .then((response) => {
    //     setYieldData(response.data);
    //     setLoading(false); // Set loading to false after data is fetched
    //   })
    //   .catch((error) => {
    //     console.error('There was an error fetching the yield data!', error);
    //     setLoading(false); // Set loading to false even if there's an error
    //   });
  }, []);


  const chartData = {
    labels: yieldData.map((data) => data.dateOfHarvesting),
    datasets: [
      {
        label: 'Yield Produced',
        data: yieldData.map((data) => data.yieldProduced),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date of Harvesting'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Yield Produced'
        }
      }
    }
  };

  if (loading) {
    return <div>
        <Navigation/>
        Loading...
        </div>; // Display loading indicator while data is being fetched
  }

  if (yieldData.length === 0) {
    return <div>
        <Navigation/>
        No data available</div>; // Display message if no data is available
  }

  return (
    <div>
        <Navigation/>
    <div className="container mt-5">
      <h2>Yield Visualization</h2>
      <div style={{ height: '500px' }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
    </div>
  );
};

export default YieldVisualization;
