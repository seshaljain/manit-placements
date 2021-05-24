import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { title, header } from "./header.module.scss"

const Header = props => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header className={header}>
      <h1>
        <Link to="/" className={title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </header>
  )
}

export default Header
