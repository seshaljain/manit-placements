import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"

import makeUrl from "../utils/url"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Company = ({ data }) => {
  return (
    <Link className="inline-block mr-4 mb-4" to={makeUrl(data)}>
      <li className="bg-white p-6 rounded-lg">
        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
          {data.companyName}
        </h4>

        <div className="flex xs:flex-col md:flex-row mt-2">
          <p className="flex flex-col justify-end mr-4 text-lg">
            <span>
              <span role="img" aria-label="Position">
                🤵
              </span>
              {data.position}
            </span>
            <span>
              <span role="img" aria-label="CTC">
                💰
              </span>{" "}
              {data.cTC__LPA_} LPA
            </span>
          </p>
          <p className="flex flex-col items-end">
            <span>
              <span role="img" aria-label="Date">
                🗓
              </span>{" "}
              {moment(data.date, "MM/DD/YYYY").format("DD/MM/YY")}
            </span>
            <span>
              <span role="img" aria-label="GPA">
                📜
              </span>{" "}
              {data.minimumGPA} GPA
            </span>
            <span>
              <span role="img" aria-label="Departments">
                🏛
              </span>{" "}
              {data.eligibleDepartments}
            </span>
          </p>
        </div>
      </li>
    </Link>
  )
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title={"Home"} />
      <ul className="flex flex-wrap list-none">
        {data.googleSheet.Responses.map(response => (
          <Company key={response.id} data={response} />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  {
    googleSheet {
      Responses {
        id
        companyName
        date
        position
        jobDescription
        eligibleDepartments
        cTC__LPA_
        minimumGPA
      }
    }
  }
`
