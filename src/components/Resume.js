import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { container, columns, column } from '../styles/container.module.scss'
import { blue } from '../styles/buttons.module.scss'
import Timeline from './Timeline';

const work = [
    {
        position: 'Graphic Designer',
        company: 'Kristianstadsbladet, Kristianstad',
        time: 'March 2016 - present'
    },
    {
        position: 'Final Art',
        company: 'Mustasch Reklambyrå, Karlskrona',
        time: 'February 2015 - December 2015'
    },
    {
        position: 'Graphic Designer',
        company: 'Viron Media, Karlshamn',
        time: 'September 2014 - November 2014'
    },
    {
        position: 'Intern',
        company: 'Bold Design, Stockholm',
        time: 'November 2012 - January 2013'
    }
];
const education = [
    {
        position: 'Front End Developer',
        company: 'Medieinstitutet, Malmö',
        time: 'September 2019 - present'
    },
    {
        position: 'Web Programming & Databases',
        company: 'Blekinge Tekniska Högskola, Karlskrona',
        time: 'September 2018 - June 2019'
    },
    {
        position: 'Advertising, Graphic Design & Visual Communication',
        company: 'Linnéuniversitetet, Kalmar',
        time: 'September 2010 - June 2013'
    },
    {
        position: 'IT-Media',
        company: 'John Bauergymnasiet, Västerås',
        time: 'September 2007 - June 2010'
    }
]

export default function Resume() {
    const data = useStaticQuery(graphql`
        { site { siteMetadata { linkedin_url}}}
    `)
    const { linkedin_url } = data.site.siteMetadata
    return (
        <section id="resume">
            <div className={container}>
                <h2>Resume</h2>
                <div className={columns}>
                    <div className={column}>
                        <h3>Work experience</h3>
                        <Timeline items={work} />
                    </div>
                    <div className={column}>
                        <h3>Education</h3>
                        <Timeline items={education} />
                    </div>
                </div>
                <footer>
                    <a className={blue} href={linkedin_url}>Complete resume</a>
                </footer>
            </div>
        </section>
    )
}
