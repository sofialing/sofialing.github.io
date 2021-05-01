import React, { useState } from 'react'
import { container } from '../styles/container.module.scss'
import { contactForm, hasValue } from '../styles/form.module.scss'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // const onSubmit = e => {
    //     e.preventDefault();
    // }

    return (
        <section id="contact">
            <div className={container}>
                <h2>Contact</h2>
                <form className={contactForm} method="post" action="https://getform.io/f/4d48c486-b720-4fad-8913-03b4ad5000c6">
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="name" className={name.length ? hasValue : ''}>Name</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="name" className={email.length ? hasValue : ''}>Email</label>
                    </div>
                    <div>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            rows="4"
                            required
                        />
                        <label htmlFor="message" className={message.length ? hasValue : ''}>Message</label>
                    </div>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </section>
    )
}
