import React from 'react'
import Link from 'gatsby-link'
import Player from '../components/Player'
import Poster from '../components/Poster'
import SocialFeeds from '../components/SocialFeeds'

const IndexPage = ({data}) => (
  <div style={{textAlign: 'center'}}>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <hr style={{ margin: 40}} />
            <Poster />
            <hr style={{ margin: 40}} />
            <Player url={post.node.frontmatter.url} playlist={post.node.frontmatter.list} />
            <hr style={{ margin: 40}} />
            <SocialFeeds />
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
                        url
                        list
                    }
                }
            }
        }
    }
`;

export default IndexPage
