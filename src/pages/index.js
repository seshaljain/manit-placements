import React from "react"
import { Link, graphql } from "gatsby"

import makeUrl from "../utils/url"

import Layout from "../components/Layout"
import CompanyCard from "../components/CompanyCard"
import Seo from "../components/Seo"

import { dashboardCard } from "./index.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title={"Home"} />
      <div className="flex flex-wrap justify-around my-4">
        <div className={`${dashboardCard} bg-red-400 text-red-50`}>
          <span className="text-4xl font-bold">
            {data.googleSheet.Analysis[0].companyCount}
          </span>
          <br />
          <span className="text-lg font-semibold">Total Companies</span>
        </div>
        <div className={`${dashboardCard} bg-yellow-400 text-yellow-50`}>
          <span className="text-4xl font-bold">
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
          <Link className="flex-auto m-2" to={makeUrl(response)}>
            <li>
              <CompanyCard key={response.id} data={response} />
            </li>
          </Link>
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
