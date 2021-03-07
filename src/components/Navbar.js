import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import { navbar, logo, menu } from '../styles/navbar.module.scss'
import { container } from '../styles/container.module.scss'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        { site {  siteMetadata { title } } }
    `)
    const { title } = data.site.siteMetadata

    return (
        <nav className={navbar}>
            <div className={container}>
                <Link to="/" className={logo}>{title}</Link>
                <ul className={menu}>
                    <li>
                        <Link to="#projects">
                            <DeveloperBoardIcon />
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#resume">
                            <BusinessCenterIcon />
                            <span>Resume</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#skills">
                            <AssignmentIndIcon />
                            <span>Skills</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
