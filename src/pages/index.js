import React from "react"
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import Theme from '../config/Theme';
import Layout from "../components/layout/Layout"
import Home from "../components/home/Home"
import SEO from "../components/seo"

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #___gatsby, main {
    height: 100%;
  }

  div[role="group"][tabindex] {
    height: 100%;
}

body {
  background-color: ${props => props.theme.colors.brightWhite};
}
  /* other styles */
`;

const IndexPage = () => (
  <Theme>
    <GlobalStyle />
    <Layout>
      <SEO />
      <Home></Home>
    </Layout>
  </Theme >
)

export default IndexPage
