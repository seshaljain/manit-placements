import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="mx-2 my-4">
      <p>
        Created by{" "}
        <a
          href="https://github.com/seshaljain/"
          target="_blank"
          rel="noreferrer"
        >
          {data.site.siteMetadata.author}
        </a>
      </p>
    </footer>
  )
}

export default Footer
