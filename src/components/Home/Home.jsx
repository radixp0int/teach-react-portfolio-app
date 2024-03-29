import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";


import Typewriter from "./Typewriter";
import './Home.scss'

const Home = () => {
    const greeting = 'Hi, my name is';
    const name = 'Nancy Herschel';
    const statementList = ["Back End Developer.", "Front End Developer."];
    const description =
        'I’m a full-stack developer specializing in building digital experiences for a Financial Institution. ' +
        'Currently, I’m focused on building responsive full-stack web applications.';
    const nextSection = 'View More';

    return (
        <div id='home' className='app__home'>
            {/* Container */}
            <div className='app__home-container'>
                <p className='app__home-hello'>
                    {greeting}</p>
                <h1 className='app__home-name'>
                    {name}</h1>
                <h2 className='app__home-statement'>
                    <Typewriter statements={statementList} />
                </h2>
                <p className='app__home-description'>
                    {description}</p>
                <div>
                    <button className='app__home-button group'>
                        <Link
                            to='about' smooth={true} duration={500}>
                            {nextSection}
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
