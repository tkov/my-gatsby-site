import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
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


// adding slug field to query...
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
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
                {
                    //data.allFile.nodes.map((node) => (
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                              <Link to={`/blog/${node.slug}`}>
                                { node.frontmatter.title } 
                              </Link>
                            </h2>
                            <p>Posted: { node.frontmatter.date } </p>
                            {/* <MDXRenderer>
                                { node.body }
                            </MDXRenderer> */}
                        </article>
                    ))
                }
        </Layout>
    )
}

export default BlogPage;


