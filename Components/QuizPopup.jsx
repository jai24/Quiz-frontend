import React, { useState } from 'react';
import './Css/Popup.css';

export function QuizPopup({ handlePopup }) {
    const [pages, setPages] = useState([{ id: 1, content: "Page 1 content" }]);
    const [quizName, setQuizName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOptionType, setSelectedOptionType] = useState('Text'); // For the option type (Text, Image-URL, etc.)
    const [selectedAnswer, setSelectedAnswer] = useState(''); // For the selected quiz answer
    const [options, setOptions] = useState({
        option1: '',
        option2: '',
        option3: ''
    });

    const addNewPage = () => {
        if (pages.length >= 5) {
            alert("Maximum of 5 pages allowed");
            return;
        }
        const newPageId = pages.length + 1;
        setPages([...pages, { id: newPageId, content: `Page ${newPageId} content` }]);
        setCurrentPage(newPageId);
    };

    const handlePageClick = (pageId) => {
        setCurrentPage(pageId);
    };

    const removePage = (pageId) => {
        if (pages.length === 1) {
            alert("At least one page is required.");
            return;
        }
        const updatedPages = pages.filter(page => page.id !== pageId);
        setPages(updatedPages);

        if (currentPage === pageId && updatedPages.length > 0) {
            setCurrentPage(updatedPages[0].id);
        }
    };

    const handleOptionTypeChange = (e) => {
        setSelectedOptionType(e.target.value);
    };

    const handleAnswerSelection = (e) => {
        setSelectedAnswer(e.target.name);
        setQuizName(e.target.value); // storing the quiz question
    };

    const handleOptionChange = (e) => {
        setOptions({
            ...options,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from reloading
        console.log(selectedAnswer, options, quizName);
        // You can now handle the form submission logic here
    };

    return (
        <>
            <div className="quiz-popup-container">
                <div className="quiz-popup-style">
                    <div className="page-buttons">
                        {pages.map(page => (
                            <div key={page.id} className="page-button-wrapper">
                                <button
                                    id="number-button"
                                    onClick={() => handlePageClick(page.id)}
                                >
                                    {page.id}
                                    <span className="close-button" onClick={(e) => {
                                        e.stopPropagation(); 
                                        removePage(page.id);
                                    }}>
                                        &times;
                                    </span>
                                </button>
                            </div>
                        ))}
                        <button className='plus-button' onClick={addNewPage} disabled={pages.length >= 5}>+</button>
                        <span className='max-q'>Max 5 questions</span>
                    </div>
                    <div className="page-content">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="ques-field"
                                onChange={handleAnswerSelection}
                                placeholder="Poll Question"
                            />
                            <div className='radio'>
                                <span>Option Type</span>
                                <input
                                    type="radio"
                                    id="Text"
                                    name="optionType"
                                    value="Text"
                                    checked={selectedOptionType === 'Text'}
                                    onChange={handleOptionTypeChange}
                                />
                                <label htmlFor="Text">Text</label><br />

                                <input
                                    type="radio"
                                    id="Image-URL"
                                    name="optionType"
                                    value="Image-URL"
                                    checked={selectedOptionType === 'Image-URL'}
                                    onChange={handleOptionTypeChange}
                                />
                                <label htmlFor="Image-URL">Image-URL</label><br />

                                <input
                                    type="radio"
                                    id="Image-and-URL"
                                    name="optionType"
                                    value="Image-and-URL"
                                    checked={selectedOptionType === 'Image-and-URL'}
                                    onChange={handleOptionTypeChange}
                                />
                                <label htmlFor="Image-and-URL">Text & Image URL</label>
                            </div>
                        
                            <div className='input-field'>
                                <div>
                                    <input
                                        type="radio"
                                        name="option1"
                                        value="option1"
                                        checked={selectedAnswer === 'option1'}
                                        onChange={handleAnswerSelection}
                                    />
                                    <label>
                                        <input
                                            type="text"
                                            name="option1"
                                            value={options.option1}
                                            onChange={handleOptionChange}
                                            placeholder="Enter option 1"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="option2"
                                        value="option2"
                                        checked={selectedAnswer === 'option2'}
                                        onChange={handleAnswerSelection}
                                    />
                                    <label>
                                        <input
                                            type="text"
                                            name="option2"
                                            value={options.option2}
                                            onChange={handleOptionChange}
                                            placeholder="Enter option 2"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="option3"
                                        value="option3"
                                        checked={selectedAnswer === 'option3'}
                                        onChange={handleAnswerSelection}
                                    />
                                    <label>
                                        <input
                                            type="text"
                                            name="option3"
                                            value={options.option3}
                                            onChange={handleOptionChange}
                                            placeholder="Enter option 3"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className='action-button'>
                                <button type="button" onClick={handlePopup}>Close</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
