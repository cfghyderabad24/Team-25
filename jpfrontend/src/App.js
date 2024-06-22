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
import RecentReports from './RecentReports';
import PostAnalysisForm from './PostAnalysisForm';
import YieldVisualization from './YieldVisualization';
import ExpertGuidances from './ExpertGuidances';
import RaiseRequest from './RaiseRequest';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/createfarmer' element={<CreateFarmer/>}/>
          <Route path='/createuserform' element={<CreateUserForm/>}/>
          <Route path='/loginwithotp' element={<LoginWithOtp/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path="/soilanalysisform" element={<SoilAnalysisForm/>}/>
          <Route path="/recentreports" element={<RecentReports/>}/>
          <Route path="/postanalysisform" element={<PostAnalysisForm/>}/>
          <Route path="/yieldvisualization" element={<YieldVisualization/>}/>
          <Route path="/expertguidances" element={<ExpertGuidances/>}/>
          <Route path="/raise-request" element={<RaiseRequest/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
