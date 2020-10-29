// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DataHackPage = (props: PageProps) => (
  <Layout>
    <SEO title="2020 Data Hack" />
    <h1>2020 Data Hack</h1>
    <p>The 2020 Data Hack will be taking place Nov 16 - Nov 23! We will be learning about coronavirus data and data science. Experience is not required, it is recommended you have taken an introduction to programming course.</p>

    <p>Additionally we will be holding an info session on Nov. 2nd and a pre-hack workshop on Nov. 10th to gain some familiarity with Covid data and python tools we will be using. You can use other tools, but these are just recommended.</p>
    
    <h2>How to participate?</h2>
    <ul>
      <li><a href="https://forms.gle/tXLd4g7GovqQTVqw9">Register</a></li>
      <li><a href="https://discord.gg/SzdTmuQ">Join discord</a></li>
      <li><a href="https://bgsu-edu.zoom.us/j/87110291044?pwd=a2lpWUxpMFR2L0w5WkkzWWdic2VRQT09">Join the Info Session (Nov 2, 6-6.15pm)</a></li>
    </ul>

    <h3>Have questions?</h3>
    <p>Join the discord above and reach out to <strong>spencerwolf</strong></p>
  </Layout>
)

export default DataHackPage
