import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import { container, content } from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <div className={content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
