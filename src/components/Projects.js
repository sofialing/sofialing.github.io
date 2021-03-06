import React from 'react'
import ProjectCard from './ProjectCard'
import { graphql, useStaticQuery } from 'gatsby'
import { container } from '../styles/container.module.scss'
import { blue } from '../styles/buttons.module.scss'

export default function Projects() {
    const data = useStaticQuery(graphql`
        { site { siteMetadata { github_url}}}
    `)
    const { github_url } = data.site.siteMetadata
    return (
        <section id="projects" >
            <div className={container}>
                <h2>Projects</h2>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <footer>
                    <a className={blue} href={github_url}>More projects</a>
                </footer>
            </div>
        </section>
    )
}
