import React from 'react'
import { container, description, buttons, tags, image } from '../styles/card.module.scss'
import { blue } from '../styles/buttons.module.scss'

export default function ProjectCard({ project }) {

    return (
        <article className={container}>
            <div className={description}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className={buttons}>
                    <a className={blue} href={project.demo_url}>View live</a>
                    <a className={blue} href={project.github_url}>View code</a>
                </div>
                <ul className={tags}>
                    {project.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                </ul>
            </div>
            <div className={image}>
                <img src={'/' + project.img_url} alt={project.img_alt} />
            </div>
        </article>
    )
}
