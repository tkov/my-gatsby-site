import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        // <main>
        //     <title>About Me</title>
        //     <h1>About Me</h1>
        //     <Link to="/">Back to Home</Link>
        //     <p>Hi there! I'm the (not so proud) creator of this tutorial site, which I built with Gatsby.</p>
        // </main>
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the (not so proud) creator of this tutorial site, which I built with Gatsby.</p>
        </Layout>
    )

}

export default AboutPage;