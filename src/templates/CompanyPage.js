import React from "react"
import { graphql } from "gatsby"
import moment from "moment"

import Layout from "../components/Layout"
import CompanyCard from "../components/CompanyCard"
import Seo from "../components/Seo"

import { badge } from "./CompanyPage.module.css"

const RoundInfo = ({ name, desc }) => {
  return (
    <div className="bg-gray-100 rounded-md">
      <h4 className="font-bold">{name}</h4>
      <p className="m-2">{desc}</p>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    googleResponsesSheet(id: { eq: $id }) {
      id
      companyName
      date
      position
      eligibleDepartments
      cTC__LPA_
      minimumGPA
      resumeShortlist
      aptitudeTest
      technicalTest
      technicalTestDescription
      technicalInterview
      technicalInterviewDescription
      hRInterview
      hRInterviewDescription
    }
  }
`

const CompanyPage = ({ data: { googleResponsesSheet: company } }) => {
  return (
    <Layout>
      <Seo title={`${company.position}, ${company.companyName}`} />

      <div className="p-6 text-gray-900 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold leading-none uppercase">
          {company.position}, {company.companyName}
        </h2>
        <p className="flex flex-wrap mt-4 text-md">
          <span className={`${badge}`}>{`💰 ${company.cTC__LPA_} LPA `}</span>
          <span
            className={`${badge}`}
          >{`📜 > ${company.minimumGPA} GPA `}</span>
          <span className={`${badge}`}>
            {`✅ ${
              company.selections !== null
                ? `${company.selections} selected`
                : "TBA"
            } `}
          </span>
          <span className={`${badge}`}>
            {`🏛 ${
              company.eligibleDepartments.split(", ").length === 7
                ? "All Branches"
                : company.eligibleDepartments
            } `}
          </span>
          <span className={`${badge}`}>
            {`🗓 ${moment(company.date, "MM/DD/YYYY").format("MMM DD, YYYY")} `}
          </span>
        </p>
        <hr className="my-4" />

        <h3 className="text-2xl font-bold">Rounds</h3>
      </div>
    </Layout>
  )
}
export default CompanyPage
