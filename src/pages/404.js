import React from 'react'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <title>Sofia Ling | Portfolio</title>
            </Helmet>
            <p style={{ textAlign: 'center', margin: '20vh auto' }}>Oh no! Page could not be found.</p>
        </Layout>
    )
}
