import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blogs">
            <ul>
            {
                data.allFile.nodes.map(node =>(
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
            </ul>
            <p>Blogs go here</p>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export const Head = () => <Seo title="Blogs" />

export default BlogPage