import React from 'react';
import './Work.scss';
import WorkImg from '../../assets/workImg.jpeg';
import realEstate from '../../assets/realestate.jpg';

const Work = () => {
    const workHeader = 'Work';
    const workSubHeader = "// Check out some of my recent work";
    return (
        <div name='work' className='app__work'>
            <div className='app_work-container'>
                <div className='pb-8'>
                    <p className='app__work-header'>
                        {workHeader}
                    </p>
                    <p className='app__work-sub-header'>
                        {workSubHeader}
                    </p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
                            <div className='pt-8 text-center'>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{backgroundImage: `url(${realEstate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
                            <div className='pt-8 text-center'>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
                            <div className='pt-8 text-center'>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{backgroundImage: `url(${realEstate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
                            <div className='pt-8 text-center'>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
                            <div className='pt-8 text-center'>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{backgroundImage: `url(${realEstate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
                            <div className='pt-8 text-center'>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/Users/Christian-Sifuentes/Documents/Developer/portfolio-react-tailwind-app/public'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
