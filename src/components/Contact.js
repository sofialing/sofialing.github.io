import React from 'react'
import { container } from '../styles/container.module.scss'
import { blue } from '../styles/buttons.module.scss'

export default function Contact() {
    return (
        <section id="contact" >
            <div className={container}>
                <h2>Contact</h2>
                <footer>
                    <a href="#" className={blue}>Send me a mail</a>
                </footer>
            </div>
        </section>
    )
}
