import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Anurag Shenoy" />
    <Header></Header>
    <Work></Work>
    {/* <About></About> */}
    <Skills></Skills>
    {/* <Promotion></Promotion> */}
    <Contact></Contact>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
