import React from 'react'
import { Helmet } from "react-helmet"
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Sofia Ling | Portfolio</title>
      </Helmet>
      <Hero />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
    </Layout>
  )
}
