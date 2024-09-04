

// export function Popup({ togglePopup }) {
//     const [type, setType] = useState('');  // Check if Button is selected as Q&A or Poll
//     const [quizName, setQuizName] = useState('');  // Store the name of the quiz
//     const [error, setError] = useState('Quiz Name');  // Error if the quiz name is null
//     const [quizPopup, setQuizPopup] = useState(false);  // Set up the Poll popup component

//     const handlePopup = () => {  // Trigger the popup event
//         setQuizPopup(!quizPopup);
//         if (quizPopup) {
//             togglePopup();
//         }
//     };

//     const handleTypeSelection = (type) => {
//         setType(type);
//     };

//     const handleChange = (e) => {
//         setQuizName(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!quizName) {
//             setError('*Please enter the quiz name');
//             return;
//         }
//         handlePopup();
//     };

//     return (
//         <>
//             <div className="popup-container">
//                 <div className="popup-style">
//                     <form>
//                         <input type="text" autoComplete='off' className="quiz-name" onChange={handleChange} name='name' value={quizName} placeholder={error} />
//                         <div className='poll-button'>
//                             <span style={{ color: '#9F9F9F' }}>Quiz Type</span>
//                             <button type="button" className={type === 'Q & A' ? 'selected' : ''}
//                                 onClick={() => handleTypeSelection('Q & A')}> Q & A </button>
//                             <button type="button" className={type === 'Poll Type' ? 'selected' : ''}
//                                 onClick={() => handleTypeSelection('Poll Type')}>Poll Type</button>
//                         </div>
//                         <div className='action-button'>
//                             <button onClick={togglePopup}>Close</button>
//                             <button onClick={handleSubmit}>Continue</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             {quizPopup && <QuizPopup handlePopup={handlePopup} />}
//         </>
//     );
// };


import React, { useState } from 'react';
import '../Pages/Css/Popup.css';
import { QuizPopup } from './QuizPopup';

export function Popup({ togglePopup }) {
    const [type, setType] = useState('');  // Check if Button is selected as Q&A or Poll
    const [quizName, setQuizName] = useState('');  // Store the name of the quiz
    const [error, setError] = useState('Quiz Name');  // Error if the quiz name is null
    const [quizPopup, setQuizPopup] = useState(false);  // Set up the Poll popup component

    const handlePopup = () => {  // Trigger the popup event
        setQuizPopup(!quizPopup);
        if (quizPopup) {
            togglePopup();
        }
    };

    const handleTypeSelection = (selectedType) => {
        setType(selectedType);
    };

    const handleChange = (e) => {
        setQuizName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!quizName) {
            setError('*Please enter the quiz name');
            return;
        }
        handlePopup();
    };

    return (
        <>
            <div className="popup-container">
                <div className="popup-style">
                    <form>
                        <input type="text" autoComplete='off' className="quiz-name" onChange={handleChange} name='name' value={quizName} placeholder={error} />
                        <div className='poll-button'>
                            <span style={{ color: '#9F9F9F' }}>Quiz Type</span>
                            <button type="button" className={type === 'Q & A' ? 'selected' : ''}
                                onClick={() => handleTypeSelection('Q & A')}> Q & A </button>
                            <button type="button" className={type === 'Poll Type' ? 'selected' : ''}
                                onClick={() => handleTypeSelection('Poll Type')}>Poll Type</button>
                        </div>
                        <div className='action-button'>
                            <button onClick={togglePopup}>Close</button>
                            <button onClick={handleSubmit}>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
            {quizPopup && <QuizPopup handlePopup={handlePopup} quizType={type} />}
        </>
    );
}

