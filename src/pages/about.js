import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>I am the</p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage