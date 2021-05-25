import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
    <header>
      <h1 className="text-5xl my-8 font-bold">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
    </header>
  )
}

export default Header
