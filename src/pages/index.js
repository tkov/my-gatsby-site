// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define a component

const IndexPage = () => {
  return (
    // <main>
    //   <title>Home Page</title>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="tank on road"
        src="../images/justin-campbell-FacLsqkeX4w-unsplash.jpg"
      />
      <p>Photo Credit: <a href="https://unsplash.com/photos/FacLsqkeX4w">Justin Campbell</a></p>
    </Layout>

  )
}

export default IndexPage;
