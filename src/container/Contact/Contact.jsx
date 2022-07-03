import React from 'react'

import './Contact.scss'

const Contact = () => {
    const contactHeader = 'Contact';
    const contactSubHeader = "// Submit the form below or shoot me an email myemail@gmail.com";
    const contactSubmit = "Let's Collaborate";

    return (
        <div name='contact' className='app__contact'>
            <form
                method='POST'
                action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                className='app__contact-form'
            >
                <div className='pb-8'>
                    <p className='app__contact-header'>{contactHeader}</p>
                    <p className='app__contact-sub-header'>{contactSubHeader}</p>
                </div>
                <input
                    className='app__contact-name-input'
                    type="text"
                    placeholder='Name'
                    name='name'
                />
                <input
                    className='app__contact-email-input'
                    type="email"
                    placeholder='Email'
                    name='email'
                />
                <textarea
                    className='app__contact-message-input'
                    name="message"
                    rows="10"
                    placeholder='Message'>
            </textarea>
                <button className='app__contact-submit-btn'>{contactSubmit}</button>
            </form>
        </div>
    )
}

export default Contact