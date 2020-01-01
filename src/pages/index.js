import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello internet,</h1>
    <p>
      We are building a new way to store and share your digital possessions.
      We are heavily reliant on cloud providers like Google, Apple and Facebook
      to store our information. Udaimai leverages blockchain and IPFS to provide
      end-to-end encrypted storage while still being able to share it with your
      contacts.
    </p>
    <div style={{ maxWidth: `600px`, margin: "0 auto", marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
