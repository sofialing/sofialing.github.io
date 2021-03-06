import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Footer() {
    const data = useStaticQuery(graphql`
        {
            site { 
                siteMetadata {
                    title,
                    linkedin_url,
                    github_url,
                    dribbble_url
                }
            }
        }
    `)
    const { title, linkedin_url, github_url, dribbble_url } = data.site.siteMetadata
    return (
        <footer className="footer">
            <div className="footer__inner">
                <ul>
                    <li><a href={github_url}>GitHub</a></li>
                    <li><a href={linkedin_url}>LinkedIn</a></li>
                    <li><a href={dribbble_url}>Dribbble</a></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} {title} </p>
            </div>
        </footer>
    )
}
