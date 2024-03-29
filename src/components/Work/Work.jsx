import React from 'react';
import './Work.scss';
import { text } from '../../constants'

const Work = () => {
    const workHeader = 'Projects';
    const workSubHeader = "Check out some of my recent projects.";

    return (
        <div id='work' className='app__work'>
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
                    {text.workItems.map((workItem, index) =>
                        <div
                            style={{ backgroundImage: `url(${workItem.imageUrl})` }}
                            className='app__work-grid-item group container content-div'
                            id={`project-` + index}
                            key={`project-` + index}
                        >
                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100 app__work-grid-text-container'>
                                <span className='app__work-grid-item-text'>
                                    {workItem.appName}
                                </span>
                                <div className='app__work-grid-item-btn-container'>
                                    <a href={workItem.button1Href}>
                                        <button className='app__work-grid-item-btn'>
                                            {workItem.button1}
                                        </button>
                                    </a>
                                    <a href={workItem.button2Href}>
                                        <button className='app__work-grid-item-btn'>
                                            {workItem.button2}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Work;
