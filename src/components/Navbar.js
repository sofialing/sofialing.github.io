import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
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
                <AnchorLink to="/#hero" className={logo}>{title}</AnchorLink>
                <ul className={menu}>
                    <li>
                        <AnchorLink to="/#projects">
                            <DeveloperBoardIcon />
                            <span>Projects</span>
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#resume">
                            <BusinessCenterIcon />
                            <span>Resume</span>
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#skills">
                            <AssignmentIndIcon />
                            <span>Skills</span>
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#contact">Contact</AnchorLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
