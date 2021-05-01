import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { hero } from '../styles/hero.module.scss';
import { container } from '../styles/container.module.scss'


export default function Hero() {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    subtitle,
                    description
                }
            }
        }
    `)
    const { subtitle, description } = data.site.siteMetadata
    return (
        <section id="hero" className={hero}>
            <div className={container}>
                <h1 className="animate__animated animate__fadeInUp animate__delay-2s">{subtitle}</h1>
                <p className="animate__animated animate__fadeInUp animate__delay-3s">{description}</p>
            </div>
        </section>
    )
}