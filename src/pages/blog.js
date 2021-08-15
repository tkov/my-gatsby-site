import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// This is a page query 

// allFile gets replaced with allMdx
// export const query = graphql`query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }`;

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

// The page query gets run by Gatsby and passes the resulting data 
// into the page component as a prop called data

const BlogPage = ({ data }) => {  // destructuring data from props   
    return (
        <Layout pageTitle="My Blog Posts">

            {/* <p>My cool posts will go in here</p> */}
            {/* Note: React requires a key for mapped elements */}
            <ul>
                {
                    //data.allFile.nodes.map((node) => (
                    data.allMdx.nodes.map((node) => (
                      
                        <article key={node.id}>
                            <h2> { node.frontmatter.title } </h2>
                            <p>Posted: { node.frontmatter.date } </p>
                            <MDXRenderer>
                                { node.body }
                            </MDXRenderer>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export default BlogPage;


