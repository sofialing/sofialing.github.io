import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        { site {  siteMetadata { title } } }
    `)
    const { title } = data.site.siteMetadata

    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <Link to="/" className="navbar__logo">{title}</Link>
                <ul className="navbar__menu">
                    <li className="navbar__menu--item">
                        <Link to="#projects">Projects</Link>
                    </li>
                    <li className="navbar__menu--item">
                        <Link to="#skills">Skills</Link>
                    </li>
                    <li className="navbar__menu--item">
                        <Link to="#resume">Resume</Link>
                    </li>
                    <li className="navbar__menu--item">
                        <Link to="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
