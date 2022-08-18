import React, {useRef} from 'react';
import EmailJs from '@emailjs/browser';

import './Contact.scss'

const Contact = () => {
    const form = useRef();
    const contactHeader = 'Contact';
    const contactSubHeader = "Fill this form and send me an email.";
    const contactSubmit = "Let's Collaborate";

    const sendEmail = (e) => {
        e.preventDefault();

        EmailJs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then((result) => {
                e.target.reset();
                alert("Thank you for the email!")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='app__contact'>
            <form
                ref={form}
                onSubmit={sendEmail}
                className='app__contact-form'
            >
                <div className='pb-8'>
                    <p className='app__contact-header'>{contactHeader}</p>
                    <p className='app__contact-sub-header'>{contactSubHeader}</p>
                </div>
                <label className="text-white">Name</label>
                <input
                    className='app__contact-name-input'
                    type="text"
                    placeholder='Enter Name'
                    name="from_name"
                />
                <label className="text-white">Email</label>
                <input
                    className='app__contact-email-input'
                    type="email"
                    placeholder='Enter Email'
                    name="reply_to"
                />
                <label className="text-white">Message</label>
                <textarea
                    className='app__contact-message-input'
                    name="message"
                    rows="10"
                    placeholder='Enter Message'>
                </textarea>
                <button
                    type="submit"
                    value="Send"
                    className='app__contact-submit-btn'>
                    {contactSubmit}
                </button>
            </form>
        </div>
    )
}

export default Contact