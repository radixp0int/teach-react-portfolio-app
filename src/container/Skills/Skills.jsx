import React from 'react';

import './Skills.scss'
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import FireBase from '../../assets/firebase.png';
import AWS from '../../assets/aws.png';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';
import Mongo from '../../assets/mongo.png';

const Skills = () => {
    const skillsHeader = 'Skills';
    const skillsSubHeader = "// These are the technologies I've worked with";
    return (
        <div name='skills' className='app_skills'>
            {/* Container */}
            <div className='app_skills-container'>
                <div>
                    <p className='app_skills-header'>{skillsHeader}</p>
                    <p className='app_skills-sub-header'>{skillsSubHeader}</p>
                </div>

                <div className='app_skills-grid'>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={HTML} alt="HTML icon"/>
                        <p className='app_skills-item-text'>HTML</p>
                    </div>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={CSS} alt="HTML icon"/>
                        <p className='app_skills-item-text'>CSS</p>
                    </div>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={JavaScript} alt="HTML icon"/>
                        <p className='app_skills-item-text'>JAVASCRIPT</p>
                    </div>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={ReactImg} alt="HTML icon"/>
                        <p className='app_skills-item-text'>REACT</p>
                    </div>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={GitHub} alt="HTML icon"/>
                        <p className='app_skills-item-text'>GITHUB</p>
                    </div>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={Node} alt="HTML icon"/>
                        <p className='app_skills-item-text'>NODE JS</p>
                    </div>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={Mongo} alt="HTML icon"/>
                        <p className='app_skills-item-text'>MONGO DB</p>
                    </div>
                    <div className='app_skills-item'>
                        <img className='app_skills-item-img' src={AWS} alt="HTML icon"/>
                        <p className='app_skills-item-text'>AWS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
