import React from 'react';
import './Work.scss';
import { images } from '../../constants'

const Work = () => {
    const workHeader = 'Work';
    const workSubHeader = "Check out some of my recent projects.";
    const workItems = [
        {
            imageUrl: images.DashboardImg,
            appName: 'Dashboard App',
            button1: 'Demo',
            button2: 'Code',
        },
        {
            imageUrl: images.ExpensifyImg,
            appName: 'Expense Manager App',
            button1: 'Demo',
            button2: 'Code',
        },
        {
            imageUrl: images.RealEstateImg,
            appName: 'React JS Application',
            button1: 'Demo',
            button2: 'Code',
        },
        {
            imageUrl: images.RealEstateImg,
            appName: 'React JS Application',
            button1: 'Demo',
            button2: 'Code',
        },
        {
            imageUrl: images.WorkImg,
            appName: 'React JS Application',
            button1: 'Demo',
            button2: 'Code',
        },
        {
            imageUrl: images.DashboardImg,
            appName: 'Dashboard App',
            button1: 'Demo',
            button2: 'Code',
        }
    ]

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
                    {workItems.map((workItem, index) =>
                            <div
                                style={{backgroundImage: `url(${workItem.imageUrl})`}}
                                className='app__work-grid-item group container content-div'
                                id={`project-` + index}
                                key={`project-` + index}
                            >
                                {/* Hover Effects */}
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <span className='app__work-grid-item-text'>
                                        {workItem.appName}
                                    </span>
                                    <div className='app__work-grid-item-btn-container'>
                                        <a href='#'>
                                            <button
                                                className='app__work-grid-item-btn'>
                                                {workItem.button1}
                                            </button>
                                        </a>
                                        <a href='#'>
                                            <button
                                                className='app__work-grid-item-btn'>
                                                {workItem.button2}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    )}

                    {/*Terrible Old Way*/}
                    {/*<div*/}
                    {/*    style={{backgroundImage: `url(${images.RealEstateImg})`}}*/}
                    {/*    className='app__work-grid-item group container content-div'*/}
                    {/*>*/}
                    {/*    /!* Hover Effects *!/*/}
                    {/*    <div className='opacity-0 group-hover:opacity-100'>*/}
                    {/*        <span className='app__work-grid-item-text'>*/}
                    {/*            React JS Application*/}
                    {/*        </span>*/}
                    {/*        <div className='app__work-grid-item-btn-container'>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Demo*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Code*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div*/}
                    {/*    style={{backgroundImage: `url(${images.WorkImg})`}}*/}
                    {/*    className='app__work-grid-item group container content-div'*/}
                    {/*>*/}
                    {/*    /!* Hover Effects *!/*/}
                    {/*    <div className='opacity-0 group-hover:opacity-100'>*/}
                    {/*        <span className='app__work-grid-item-text'>*/}
                    {/*            React JS Application*/}
                    {/*        </span>*/}
                    {/*        <div className='app__work-grid-item-btn-container'>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Demo*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Code*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*/!* Grid Item *!/*/}
                    {/*<div*/}
                    {/*    style={{backgroundImage: `url(${images.DashboardImg})`}}*/}
                    {/*    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'*/}
                    {/*>*/}
                    {/*    /!* Hover Effects *!/*/}
                    {/*    <div className='opacity-0 group-hover:opacity-100'>*/}
                    {/*        <span className='app__work-grid-item-text'>*/}
                    {/*            React JS Application*/}
                    {/*        </span>*/}
                    {/*        <div className='app__work-grid-item-btn-container'>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Demo*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Code*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    style={{backgroundImage: `url(${images.DashboardImg})`}}*/}
                    {/*    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'*/}
                    {/*>*/}
                    {/*    /!* Hover Effects *!/*/}
                    {/*    <div className='opacity-0 group-hover:opacity-100'>*/}
                    {/*        <span className='app__work-grid-item-text'>*/}
                    {/*            React JS Application*/}
                    {/*        </span>*/}
                    {/*        <div className='app__work-grid-item-btn-container'>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Demo*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Code*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*/!* Grid Item *!/*/}
                    {/*<div*/}
                    {/*    style={{backgroundImage: `url(${images.RealEstateImg})`}}*/}
                    {/*    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'*/}
                    {/*>*/}
                    {/*    /!* Hover Effects *!/*/}
                    {/*    <div className='opacity-0 group-hover:opacity-100'>*/}
                    {/*        <span className='app__work-grid-item-text'>*/}
                    {/*            React JS Application*/}
                    {/*        </span>*/}
                    {/*        <div className='app__work-grid-item-btn-container'>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Demo*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Code*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    style={{backgroundImage: `url(${images.ExpensifyImg})`}}*/}
                    {/*    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'*/}
                    {/*>*/}
                    {/*    /!* Hover Effects *!/*/}
                    {/*    <div className='opacity-0 group-hover:opacity-100'>*/}
                    {/*        <span className='app__work-grid-item-text'>*/}
                    {/*            React JS Application*/}
                    {/*        </span>*/}
                    {/*        <div className='app__work-grid-item-btn-container'>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Demo*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*            <a href='#'>*/}
                    {/*                <button*/}
                    {/*                    className='app__work-grid-item-btn'>*/}
                    {/*                    Code*/}
                    {/*                </button>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
};

export default Work;
