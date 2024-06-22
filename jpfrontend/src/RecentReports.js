// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal } from 'react-bootstrap';
// import Axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './Navigation';

// const RecentReports = () => {
//   const [reports, setReports] = useState([]);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     Axios.get('http://localhost:8081/api/soil-analysis')
//       .then((response) => {
//         setReports(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching reports:', error);
//       });
//   }, []);

//   const handleShowModal = (report) => {
//     setSelectedReport(report);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedReport(null);
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <Navigation />
//       <div className="container mt-5">
//         <h2>Recent Soil Analysis Reports</h2>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>View Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report) => (
//               <tr key={report._id}>
//                 <td>{new Date(report.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <Button variant="info" onClick={() => handleShowModal(report)}>
//                     <i className="bi bi-eye"></i>
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>

//         {selectedReport && (
//           <Modal show={showModal} onHide={handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Soil Analysis Report</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <p><strong>Mobile Number:</strong> {selectedReport.mobileNumber}</p>
//               <p><strong>Nitrogen Value:</strong> {selectedReport.nitrogenValue}</p>
//               <p><strong>Phosphorous Value:</strong> {selectedReport.phosphorousValue}</p>
//               <p><strong>Potassium Value:</strong> {selectedReport.potassiumValue}</p>
//               <p><strong>Calcium Value:</strong> {selectedReport.calciumValue}</p>
//               <p><strong>Magnesium Value:</strong> {selectedReport.magnesiumValue}</p>
//               <p><strong>Zinc Value:</strong> {selectedReport.zincValue}</p>
//               <p><strong>Iron Value:</strong> {selectedReport.ironValue}</p>
//               <p><strong>Manganese Value:</strong> {selectedReport.manganeseValue}</p>
//               <p><strong>Copper Value:</strong> {selectedReport.copperValue}</p>
//               <p><strong>Sodium Value:</strong> {selectedReport.sodiumValue}</p>
//               <p><strong>Sulphur Value:</strong> {selectedReport.sulphurValue}</p>
//               <p><strong>Salinity:</strong> {selectedReport.salinity}</p>
//               <p><strong>pH Value:</strong> {selectedReport.phValue}</p>
//               <p><strong>Recommendation:</strong> {selectedReport.recommendation}</p>
//               <p><strong>Crop Name:</strong> {selectedReport.cropName}</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecentReports;

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

const RecentReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch reports from the server
    Axios.get('http://localhost:8081/api/soil-analysis')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });

    // Static data for testing purposes
    const staticData = [
      {
        _id: '1',
        createdAt: new Date().toISOString(),
        mobileNumber: '1234567890',
        nitrogenValue: '20',
        phosphorousValue: '15',
        potassiumValue: '30',
        calciumValue: '10',
        magnesiumValue: '5',
        zincValue: '2',
        ironValue: '3',
        manganeseValue: '1',
        copperValue: '1',
        sodiumValue: '0.5',
        sulphurValue: '2.5',
        salinity: '1.0',
        phValue: '7.0',
        recommendation: 'Add more nitrogen.',
        cropName: 'Wheat'
      },
      {
        _id: '2',
        createdAt: new Date().toISOString(),
        mobileNumber: '0987654321',
        nitrogenValue: '18',
        phosphorousValue: '12',
        potassiumValue: '25',
        calciumValue: '8',
        magnesiumValue: '4',
        zincValue: '1.5',
        ironValue: '2.5',
        manganeseValue: '0.8',
        copperValue: '0.7',
        sodiumValue: '0.4',
        sulphurValue: '2.0',
        salinity: '0.9',
        phValue: '6.8',
        recommendation: 'Add more phosphorous.',
        cropName: 'Corn'
      }
    ];

    setReports(staticData);
  }, []);

  const handleShowModal = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedReport(null);
    setShowModal(false);
  };

  return (
    <div>
      <Navigation />
      <div className="container mt-5">
        <h2>Recent Soil Analysis Reports</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report._id}>
                <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                <td>
                  <Button variant="info" onClick={() => handleShowModal(report)}>
                    <i className="bi bi-eye"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {selectedReport && (
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Soil Analysis Report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Mobile Number:</strong> {selectedReport.mobileNumber}</p>
              <p><strong>Nitrogen Value:</strong> {selectedReport.nitrogenValue}</p>
              <p><strong>Phosphorous Value:</strong> {selectedReport.phosphorousValue}</p>
              <p><strong>Potassium Value:</strong> {selectedReport.potassiumValue}</p>
              <p><strong>Calcium Value:</strong> {selectedReport.calciumValue}</p>
              <p><strong>Magnesium Value:</strong> {selectedReport.magnesiumValue}</p>
              <p><strong>Zinc Value:</strong> {selectedReport.zincValue}</p>
              <p><strong>Iron Value:</strong> {selectedReport.ironValue}</p>
              <p><strong>Manganese Value:</strong> {selectedReport.manganeseValue}</p>
              <p><strong>Copper Value:</strong> {selectedReport.copperValue}</p>
              <p><strong>Sodium Value:</strong> {selectedReport.sodiumValue}</p>
              <p><strong>Sulphur Value:</strong> {selectedReport.sulphurValue}</p>
              <p><strong>Salinity:</strong> {selectedReport.salinity}</p>
              <p><strong>pH Value:</strong> {selectedReport.phValue}</p>
              <p><strong>Recommendation:</strong> {selectedReport.recommendation}</p>
              <p><strong>Crop Name:</strong> {selectedReport.cropName}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default RecentReports;

