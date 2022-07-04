import React from 'react';
import './Work.scss';
import WorkImg from '../../assets/workImg.jpeg';
import realEstate from '../../assets/realestate.jpg';

const Work = () => {
    const workHeader = 'Work';
    const workSubHeader = "Check out some of my recent projects.";
    return (
        <div name='work' className='app__work'>
            <div className='app__work-container'>
                <div className='pb-8'>
                    <p className='app__work-header'>
                        {workHeader}
                    </p>
                    <p className='app__work-sub-header'>
                        {workSubHeader}
                    </p>
                </div>

                {/* Container */}
                <div className='app__work-grid'>

                    {/* Grid Item */}
                    {/* photoUrl, appName*/}
                    <div
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='app__work-grid-item group container content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='app__work-grid-item-text'>
                                React JS Application
                            </span>
                            <div className='app__work-grid-item-btn-container'>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Demo
                                    </button>
                                </a>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{backgroundImage: `url(${realEstate})`}}
                        className='app__work-grid-item group container content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='app__work-grid-item-text'>
                                React JS Application
                            </span>
                            <div className='app__work-grid-item-btn-container'>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Demo
                                    </button>
                                </a>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='app__work-grid-item-text'>
                                React JS Application
                            </span>
                            <div className='app__work-grid-item-btn-container'>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Demo
                                    </button>
                                </a>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{backgroundImage: `url(${realEstate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='app__work-grid-item-text'>
                                React JS Application
                            </span>
                            <div className='app__work-grid-item-btn-container'>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Demo
                                    </button>
                                </a>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='app__work-grid-item-text'>
                                React JS Application
                            </span>
                            <div className='app__work-grid-item-btn-container'>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Demo
                                    </button>
                                </a>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{backgroundImage: `url(${realEstate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='app__work-grid-item-text'>
                                React JS Application
                            </span>
                            <div className='app__work-grid-item-btn-container'>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Demo
                                    </button>
                                </a>
                                <a href='#'>
                                    <button
                                        className='app__work-grid-item-btn'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
