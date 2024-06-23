import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import CreateFarmer from './CreateFarmer';
import CreateUserForm from './CreateUserForm';
import LoginWithOtp from './LoginWithOtp';
import Home from './Home';
import ChangePassword from './ChangePassword';
import SoilAnalysisForm from './SoilAnalaysisForm';
import WeatherSee from './WeatherSee'
import Visual from './Visual';
// import SoilAnalysisForm from './SoilAnalaysisForm'
// import YieldVisualization from './YieldVisualization';
import RecentReports from './RecentReports';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visual" element={<Visual/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/createfarmer' element={<CreateFarmer/>}/>
          <Route path='/createuserform' element={<CreateUserForm/>}/>
          <Route path='/loginwithotp' element={<LoginWithOtp/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path="/soilanalysisform" element={<SoilAnalysisForm/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/weather" element={<WeatherSee />} />
          {/* <Route path="/yeildVisu" element={<YieldVisualization/>} /> */}
          {/* <Route path='/soilAnalysis' element={<SoilAnalysisForm/>}/> */}
          <Route path="/rec" element={<RecentReports />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
