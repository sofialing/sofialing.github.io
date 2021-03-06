import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
    </Layout>
  )
}
