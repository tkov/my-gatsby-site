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
        alt="Hollow Knight"
        src="../images/hollow-knight.jpg"
      />
    </Layout>

  )
}

export default IndexPage;
