import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import './Home.scss'

const Home = () => {
    const greeting = 'Hi, my name is';
    const name = 'Nikola Haroshka';
    const statement = "I'm a Full Stack Developer.";
    const description =
        'I’m a full-stack developer specializing in building (and occasionally\n' +
        'designing) exceptional digital experiences. Currently, I’m focused on\n' +
        'building responsive full-stack web applications.';
    const nextSection = 'View Work';
    return (
        <div name='home' className='app__home'>
            {/* Container */}
            <div className='app__home-container'>
                <p className='app__home-hello'>
                    {greeting}</p>
                <h1 className='app__home-name'>
                    {name}</h1>
                <h2 className='app__home-statement'>
                    {statement}</h2>
                <p className='app__home-description'>
                    {description}</p>
                <div>
                    <button className='app__home-button group'>
                        {nextSection}
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 '/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
