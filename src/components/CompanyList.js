import React from "react"
import { Link } from "gatsby"

import CompanyCard from "./CompanyCard"

import makeUrl from "../utils/url"

const CompanyList = ({ companyList }) => {
  return (
    <ul className="flex flex-wrap list-none">
      {companyList.map(response => (
        <Link className="flex-auto m-2" to={makeUrl(response)}>
          <li>
            <CompanyCard key={response.id} data={response} />
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default CompanyList
