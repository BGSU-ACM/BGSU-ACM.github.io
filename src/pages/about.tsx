// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Our Board" />
    <h1>Our Board</h1>
    <p>Coming soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
