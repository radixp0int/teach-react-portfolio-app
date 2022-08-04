import React from 'react';

import './Skills.scss'
import { text } from '../../constants'

const Skills = () => {
    const skillsHeader = 'Skills';
    const skillsSubHeader = "I worked with all of these technologies.";

    return (
        <div id='skills' className='app__skills'>
            {/* Container */}
            <div className='app__skills-container'>
                <div>
                    <p className='app__skills-header'>{skillsHeader}</p>
                    <p className='app__skills-sub-header'>{skillsSubHeader}</p>
                </div>

                <div className='app__skills-grid'>
                    {text.skillItems.map((skill, index) =>
                        <div
                            className='app__skills-item'
                            id={`skills-item-` + index}
                            key={skill.text + index}
                        >
                            <img
                                className='app__skills-item-img'
                                src={skill.src}
                                alt={skill.altText}/>
                            <p className='app__skills-item-text'>{skill.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;
