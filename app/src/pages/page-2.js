import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Sign up" />
    <h1>Sign up</h1>
    <p>Welcome</p>
    <input type = "text" placeholder="Enter username"/><br/>
    <input type = "password" placeholder="Enter password"/><br/>
    <button>Submit</button><br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

