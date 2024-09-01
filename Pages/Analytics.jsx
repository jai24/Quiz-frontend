import React,{useState} from 'react'
import './Css/Dashboard.css'
import './Css/Popup.css'
import {useNavigate} from 'react-router-dom'
import {Popup} from './Popup.jsx'

const Analytics = () => {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
      };
  return (
    <>
     <div className='dash-container'>
        <div className='left-container'><h1>Quizze</h1>
          <div className='left-menu'>
            <button onClick={()=>navigate('/Dashboard')}>Dashboard</button>
            <button>Analytics</button>
            <button onClick={togglePopup}>Create Quiz</button>
          </div>
          <div className="left-bottom"><p>___________</p><button>Log Out</button></div>
        </div> 
        <h1>Quiz Analysis</h1></div>
        {showPopup && <Popup togglePopup={togglePopup} />}
    </>
  )
}

export default Analytics
