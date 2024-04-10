import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page"> 
        <p>I'm making this by following the Gatsby tutorial.</p>
        <StaticImage
        alt="dog"
        src="../images/dog.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage