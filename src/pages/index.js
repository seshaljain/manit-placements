import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"

import makeUrl from "../utils/url"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { dashboardCard } from "./index.module.css"

const Company = ({ data }) => {
  return (
    <Link className="flex-auto m-2 text-gray-900" to={makeUrl(data)}>
      <li className="p-6 bg-white rounded-lg shadow-md">
        <div>
          <h4 className="text-xl font-semibold leading-none uppercase">
            {data.companyName}
          </h4>
          <p className="flex justify-between mt-2 text-md">
            <span className="mr-4">{`🤵 ${data.position} `}</span>
            <span>{`💰 ${data.cTC__LPA_} LPA `}</span>
          </p>
        </div>

        <div className="flex xs:flex-col md:flex-row">
          <p className="flex flex-col flex-grow mr-4">
            <span>
              {`🏛 ${
                data.eligibleDepartments.split(", ").length === 7
                  ? "All Branches"
                  : data.eligibleDepartments
              } `}
            </span>
            <span>
              {`🗓 ${moment(data.date, "MM/DD/YYYY").format("MMM DD, YYYY")} `}
            </span>
          </p>
          <p className="flex flex-col items-end">
            <span>{`📜 > ${data.minimumGPA} GPA `}</span>
            <span>
              {`✅ ${
                data.selections !== null ? `${data.selections} selected` : "TBA"
              } `}
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
      <div className="flex flex-wrap justify-around my-4">
        <div className={`${dashboardCard} bg-red-400 text-red-50`}>
          <span class="text-4xl font-bold">
            {data.googleSheet.Analysis[0].companyCount}
          </span>
          <br />
          <span className="text-lg font-semibold">Total Companies</span>
        </div>
        <div className={`${dashboardCard} bg-yellow-400 text-yellow-50`}>
          <span class="text-4xl font-bold">
            {data.googleSheet.Analysis[0].offerCount}
          </span>
          <br />
          <span className="text-lg font-semibold">Total Offers</span>
        </div>
        <div className={`${dashboardCard} bg-green-400 text-green-50`}>
          <span class="text-4xl font-bold">
            {data.googleSheet.Analysis[0].medianPackage}
          </span>

          <span className="text-xl font-bold"> LPA</span>
          <br />
          <span className="text-lg font-semibold">Median Package</span>
        </div>
        <div className={`${dashboardCard} bg-purple-400 text-purple-50`}>
          <span class="text-4xl font-bold">
            {data.googleSheet.Analysis[0].maxPackage}
          </span>
          <span className="text-xl font-bold"> LPA</span>
          <br />
          <span className="text-lg font-semibold">Max Package</span>
        </div>
      </div>

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
        selections
      }
      Analysis {
        maxPackage
        medianPackage
        companyCount
        offerCount
      }
    }
  }
`
