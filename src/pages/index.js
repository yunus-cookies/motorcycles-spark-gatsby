import { motion } from "framer-motion"
import * as React from "react"
import Hero from "../components/Hero"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  </motion.div>
)

export default IndexPage
