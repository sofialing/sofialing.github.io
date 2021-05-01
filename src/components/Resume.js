import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { container, columns, column } from '../styles/container.module.scss'
import { blue } from '../styles/buttons.module.scss'
import Timeline from './Timeline';

export default function Resume() {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    linkedin_url
                }
            },
            allWorkJson {
                edges {
                    node {
                        title, location, time
                    }
                }
            },
            allEducationJson {
                edges {
                    node {
                        title, location, time
                    }
                }
            }
        }
    `)
    const { linkedin_url } = data.site.siteMetadata
    return (
        <section id="resume">
            <div className={container}>
                <h2>Resume</h2>
                <div className={columns}>
                    <div className={column}>
                        <h3>Work experience</h3>
                        <Timeline items={data.allWorkJson.edges} />
                    </div>
                    <div className={column}>
                        <h3>Education</h3>
                        <Timeline items={data.allEducationJson.edges} />
                    </div>
                </div>
                <footer>
                    <a className={blue} href="/misc/sofia-ling-cv-2021.pdf">Download resume</a>
                    <a className={blue} href={linkedin_url}>Linkedin</a>
                </footer>
            </div>
        </section>
    )
}
