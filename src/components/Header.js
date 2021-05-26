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
    <header className="my-16 text-center text-gray-200">
      <h1 className="text-5xl font-bold">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>

      <p className="mt-8 text-lg">
        Undergraduate On-Campus Recruitments
      </p>
    </header>
  )
}

export default Header
