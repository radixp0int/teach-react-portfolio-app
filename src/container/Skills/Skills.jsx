import React from 'react';

import './Skills.scss'
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import Vue from '../../assets/vue.png';
import AWS from '../../assets/aws.png';
import GitHub from '../../assets/github.png';
import Photoshop from '../../assets/photoshop.png';
import Mongo from '../../assets/mongo.png';
import Angular from '../../assets/angular.png';
import Spring from '../../assets/spring.png';

const Skills = () => {
    const skillsHeader = 'Skills';
    const skillsSubHeader = "I worked with all of these technologies.";
    const skillItems = [
        {
            src: Angular,
            altText: 'Angular icon',
            text: 'Angular'
        },
        {
            src: Spring,
            altText: 'Spring icon',
            text: 'Spring'
        },
        {
            src: JavaScript,
            altText: 'JavaScript icon',
            text: 'JavaScript'
        },
        {
            src: ReactImg,
            altText: 'React icon',
            text: 'React'
        },
        {
            src: Node,
            altText: 'Node icon',
            text: 'Node'
        },
        {
            src: Mongo,
            altText: 'Mongo icon',
            text: 'Mongo'
        },
        {
            src: GitHub,
            altText: 'GitHub icon',
            text: 'GitHub'
        },
        {
            src: Photoshop,
            altText: 'Photoshop icon',
            text: 'Photoshop'
        }

    ]

    return (
        <div name='skills' className='app__skills'>
            {/* Container */}
            <div className='app__skills-container'>
                <div>
                    <p className='app__skills-header'>{skillsHeader}</p>
                    <p className='app__skills-sub-header'>{skillsSubHeader}</p>
                </div>

                <div className='app__skills-grid'>
                    {skillItems.map((skill, index) =>
                        <div className='app__skills-item' id={`skills-item-` + index} key={skill.text + index}>
                            <img className='app__skills-item-img' src={skill.src} alt={skill.altText}/>
                            <p className='app__skills-item-text'>{skill.text}</p>
                        </div>
                    )}
                    {/*Old Way*/}
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
