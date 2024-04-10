import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blogs">
            {
            data.allMdx.nodes.map((node) => (
            <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
            </article>
            ))
        }
        </Layout>
    )
}

export const query = graphql`
    query MyQuery {
        allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
            id
            frontmatter {
            date
            title
            }
            excerpt
        }
        }
    }
`

export const Head = () => <Seo title="Blogs" />

export default BlogPage