import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div style={{textAlign: 'center'}}>
    <h1>Hi!</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <p>Welcome to <b>{post.node.frontmatter.title}</b> site.</p>
        </div>
    ))}
  </div>
)

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;

export default IndexPage
