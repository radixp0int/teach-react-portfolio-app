import React, { useState, useEffect } from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';

import './Home.scss'

const Home = () => {
    const greeting = 'Hi, my name is';
    const name = 'Nick Haroshka';
    const statements = ["Back End Developer.", "Front End Developer."];
    const description =
        'I’m a full-stack developer specializing in building digital experiences for a Financial Institution. ' +
        'Currently, I’m focused on building responsive full-stack web applications.';
    const nextSection = 'View Work';

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);

    const [reverse, setReverse] = useState(false);
    // typeWriter
    useEffect(() => {
        if (index === statements.length - 1 && subIndex === statements[index].length) {
            return;
        }

        if (
            subIndex === statements[index].length + 1 &&
            index !== statements.length - 1 &&
            !reverse
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === statements[index].length ? 1000 :
            150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);
    // Blinker



    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <div id='home' className='app__home'>
            {/* Container */}
            <div className='app__home-container'>
                <p className='app__home-hello'>
                    {greeting}</p>
                <h1 className='app__home-name'>
                    {name}</h1>
                <h2 className='app__home-statement'>
                    A {`${statements[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                </h2>
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
