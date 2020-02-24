import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import Theme from '../config/Theme';
import Layout from "../components/layout/Layout"
import Home from "../components/home/Home"
import Image from "../components/image"
import SEO from "../components/seo"
import { Fragment } from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #___gatsby, main {
    height: 100%;
  }

  div[role="group"][tabindex] {
    height: 100%;
}
  /* other styles */
`;

const IndexPage = () => (
  <Theme>
    <GlobalStyle />
    <Layout>
      <Home></Home>
    </Layout>
  </Theme >
)

export default IndexPage
