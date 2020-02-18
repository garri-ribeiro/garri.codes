import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Home from "../components/home/Home"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home></Home>
  </Layout>
)

export default IndexPage
