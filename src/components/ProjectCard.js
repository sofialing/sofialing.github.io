import React from 'react'
import { container, description, buttons, tags, image } from '../styles/card.module.scss'
import { blue } from '../styles/buttons.module.scss'

export default function ProjectCard() {
    return (
        <article className={container}>
            <div className={description}>
                <h3>Photo Reviewer</h3>
                <p>Simple photo app for reviewing and picking favorites. Built with React, Bulma CSS Framework, Cloud Firestore and Storage.</p>
                <div className={buttons}>
                    <a className={blue} href="#">View live</a>
                    <a className={blue} href="#">View code</a>
                </div>
                <ul className={tags}>
                    <li>React</li>
                    <li>UI Design</li>
                    <li>Firestore</li>
                    <li>Bulma</li>
                </ul>
            </div>
            <div className={image}>
                <img src={'/photo-review.png'} alt="Project mockup" />
            </div>
        </article>
    )
}
