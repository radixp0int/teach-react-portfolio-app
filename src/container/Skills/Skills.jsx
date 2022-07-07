import React from 'react';

import './Skills.scss'
import { images, text } from '../../constants'

const Skills = () => {
    const skillsHeader = 'Skills';
    const skillsSubHeader = "I worked with all of these technologies.";

    return (
        <div name='skills' className='app__skills'>
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

                    {/*Bad Way*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={HTML} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>HTML</p>*/}
                    {/*</div>*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={CSS} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>CSS</p>*/}
                    {/*</div>*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={JavaScript} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>JAVASCRIPT</p>*/}
                    {/*</div>*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={ReactImg} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>REACT</p>*/}
                    {/*</div>*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={GitHub} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>GITHUB</p>*/}
                    {/*</div>*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={Node} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>NODE JS</p>*/}
                    {/*</div>*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={Mongo} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>MONGO DB</p>*/}
                    {/*</div>*/}
                    {/*<div className='app_skills-item'>*/}
                    {/*    <img className='app_skills-item-img' src={AWS} alt="HTML icon"/>*/}
                    {/*    <p className='app_skills-item-text'>AWS</p>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
};

export default Skills;
