import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { container, columns, column } from '../styles/container.module.scss'
import { badges } from '../styles/badges.module.scss'

export default function Skills() {
    const data = useStaticQuery(graphql`
        {
            skillsJson {
                id
                design {
                  alt
                  src
                }
                development {
                  alt
                  src
                }
            }
        }
    `)
    const { design, development } = data.skillsJson;
    console.log(design, development);
    return (
        <section id="skills">
            <div className={container}>
                <h2>Skills</h2>
                <div className={columns}>
                    <div className={column}>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui et ligula sodales sodales.</p>
                        <ul className={badges}>
                            {development.map((item, i) => <li key={i}><img src={item.src} alt={item.alt} /></li>)}
                        </ul>

                    </div>
                    <div className={column}>
                        <h3>Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dui et ligula sodales sodales.</p>
                        <ul className={badges}>
                            {design.map((item, i) => <li key={i}><img src={item.src} alt={item.alt} /></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}