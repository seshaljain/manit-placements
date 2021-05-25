import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export const query = graphql`
  query($id: String!) {
    googleResponsesSheet(id: { eq: $id }) {
      id
      companyName
      date
      position
      jobDescription
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
      <div>
        <p>{company.companyName}</p>
        <p>
          Arrival Date: {company.date}
          <br />
          Position: {company.position}
          <br />
          Eligible Departments: {company.eligibleDepartments}
          <br />
          Minumum GPA: {company.minimumGPA}
          <br />
          CTC: {company.cTC__LPA_} LPA
        </p>
      </div>
    </Layout>
  )
}
export default CompanyPage
