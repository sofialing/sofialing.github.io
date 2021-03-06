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
        <section className={hero}>
            <div className={container}>
                <h1>{subtitle}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}