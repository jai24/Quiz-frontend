import React, { useState } from 'react';
import '../Pages/Css/Popup.css';

export function QuizPopup({ handlePopup, quizType}) {
    const [pages, setPages] = useState([{ id: 1 }]);
    const [quizName, setQuizName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOptionType, setSelectedOptionType] = useState('Text');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [options, setOptions] = useState({
        option1: '',
        option2: '',
        option3: ''
    });
    const [optionsTxt, setOptionsTxt] = useState({
        option1: '',
        option2: '',
        option3: ''
    });
    const [optionsImage, setOptionsImage] = useState({
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
        setPages([...pages, { id: newPageId }]);
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
    };

    const handleOptionChange = (e) => {
        setOptions({
            ...options,
            [e.target.name]: e.target.value
        });
    };
    const handleOptionsText = (e) => {
        setOptionsTxt({
            ...optionsTxt,
            [e.target.name]: e.target.value
        });
    };
    const handleOptionChangeImage = (e) => {
        setOptionsImage({
            ...optionsImage,
            [e.target.name]: e.target.value
        });
    };
    
    const handleFormSubmit = (e) => {
            e.preventDefault();
    try{
        console.log("Submit button clicked"); 
        console.log(selectedAnswer, options, quizName, optionsImage);
        alert('Form sumitted')
    }catch(error){
            console.log(error.message)
    };
}
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
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                className="ques-field"
                                onChange={(e) => setQuizName(e.target.value)}
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
                        {selectedOptionType === 'Text'&& <div className='input-field'>
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
                            </div> }
                            
                            {selectedOptionType === 'Image-URL' && <div className='input-field'>
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
                                            placeholder="Past the image url"
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
                                            placeholder="Past the image url"
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
                                            placeholder="Past the image url"
                                        />
                                    </label>
                                </div>
                            </div> }
                              {/**<input
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
                placeholder="Text"
            />
             <input
                type="text"
                name="option1Img"
                value={optionsImage.option1}
                onChange={handleOptionChangeImage}
                placeholder="Paste the image URL"
            />
        </label> */}      
                          {selectedOptionType === 'Image-and-URL' && <div className='input-field-image'>
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
                    name="option1txt"
                    value={optionsTxt.option1}
                    onChange={handleOptionsText}
                    placeholder="Enter text for option 1"
                />
                <input
                    type="text"
                    name="option1Img"
                    value={optionsImage.option1}
                    onChange={handleOptionChangeImage}
                    placeholder="Paste image URL for option 1"
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
                    name="option2txt"
                    value={optionsTxt.option2}
                    onChange={handleOptionsText}
                    placeholder="Enter text for option 2"
                />
                <input
                    type="text"
                    name="option2Img"
                    value={optionsImage.option2}
                    onChange={handleOptionChangeImage}
                    placeholder="Paste image URL for option 2"
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
                    name="option3txt"
                    value={optionsTxt.option3}
                    onChange={handleOptionsText}
                    placeholder="Enter text for option 3"
                />
                <input
                    type="text"
                    name="option3Img"
                    value={optionsImage.option3}
                    onChange={handleOptionChangeImage}
                    placeholder="Paste image URL for option 3"
                />  </label>
                                </div>
                            </div> }  
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
