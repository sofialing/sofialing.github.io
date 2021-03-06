import React from 'react'
import { container, columns, column } from '../styles/container.module.scss'

export default function Skills() {
    return (
        <section id="skills">
            <div className={container}>
                <h2>Skills</h2>
                <div className={columns}>
                    <div className={column}>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui et ligula sodales sodales.</p>
                    </div>
                    <div className={column}>
                        <h3>Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui et ligula sodales sodales.</p>
                    </div>
                    <div className={column}>
                        <h3>WordPress</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui et ligula sodales sodales.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
