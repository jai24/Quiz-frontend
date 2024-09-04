import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Css/Dashboard.css'
import {Popup} from '../Components/Popup.jsx';

const Dashboard = () => {

  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className='dash-container'>
        <div className='left-container'>
          <h1>Quizze</h1>
          <div className='left-menu'>
            <button>Dashboard</button>
            <button onClick={()=>navigate('/Analytics')}>Analytics</button>
            <button onClick={togglePopup}>Create Quiz</button>
          </div>
          <div className="left-bottom">
            <p>___________</p>
            <button>Log Out</button>
          </div>
        </div>
        <div className="right-container">
          <div className='head-stats'>
            <div>
              <p><span className="span-heading">1000</span>&nbsp; Quiz Created</p>
            </div>
            <div>
              <p><span className="span-heading">1</span>&nbsp; Questions Created</p>
            </div>
            <div>
              <p><span className="span-heading">1</span>&nbsp; Total Impressions</p>
            </div>
          </div>
          <div className="bottom-stats">
            <h2>Trending Quizzes</h2>
            <div className='box'><span>Quiz</span></div>
          </div>
        </div>
      </div>
      {showPopup && <Popup togglePopup={togglePopup} />}
    </>
  );
};

export default Dashboard;
