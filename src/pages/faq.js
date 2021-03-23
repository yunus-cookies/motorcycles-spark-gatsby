import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FaqPage = () => (
  <Layout>
    <SEO title="FAQ" />
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <StaticImage src="../images/troll.png" alt="troll" />
    </div>
  </Layout>
)

export default FaqPage
