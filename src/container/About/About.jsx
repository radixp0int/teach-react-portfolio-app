import React from 'react';

import './About.scss'

const About = () => {
    const aboutMeHeader = 'About';
    const aboutMeHighlight = "Hi. I'm Nastassia, nice to meet you. Please take a look around.";
    const aboutMeParagraph =
        'I am passionate about building excellent software that improves\n' +
        'the lives of those around me. I specialize in creating software\n' +
        'for clients ranging from individuals and small-businesses all the\n' +
        'way to large enterprise corporations. What would you do if you had\n' +
        'a software expert available at your fingertips?';

    return (
        <div name='about' className='app__about'>
            <div className='app__about-items'>
                <div className='app__about-column-1'>
                    <div className='app__about-header-div'>
                        <p className='app__about-header'>
                            {aboutMeHeader}
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='app__about-column-2'>
                    <div className='app__about-highlight'>
                        <p>{aboutMeHighlight}</p>
                    </div>
                    <div>
                        <p>{aboutMeParagraph}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
