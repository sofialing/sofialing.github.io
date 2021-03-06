import React from 'react'
import ProjectCard from './ProjectCard'
import { graphql, useStaticQuery } from 'gatsby'
import { container } from '../styles/container.module.scss'
import { blue } from '../styles/buttons.module.scss'

export default function Projects() {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    github_url
                }
            },
            allProjectsJson {
                edges {
                    node {
                        title, desc, img_url, img_alt, github_url, demo_url, tags
                    }
                }
            }
        }
    `)
    const { github_url } = data.site.siteMetadata
    const projects = data.allProjectsJson.edges

    return (
        <section id="projects" >
            <div className={container}>
                <h2>Projects</h2>
                {projects.map(project => <ProjectCard project={project.node} key={project.node.title} />)}
                <footer>
                    <a className={blue} href={github_url}>More projects</a>
                </footer>
            </div>
        </section>
    )
}
