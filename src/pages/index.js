import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { company, companyList } from "./index.module.scss"

const Company = ({ data }) => {
  return (
    <div className={company}>
      <h2>{data.company}</h2>
      <p>
        Arrival Date: {data.date}
        <br />
        Position: {data.position}
        <br />
        Job Description: {data.jobDescription}
        <br />
        Eligible Departments: {data.eligibleDepartments}
        <br />
        Minumum GPA: {data.minimumGPA}
        <br />
        CTC: {data.cTC__LPA_} LPA
      </p>
    </div>
  )
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleFormResponses1Sheet {
        edges {
          node {
            company
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
      }
    }
  `)
  return (
    <Layout>
      <div className={companyList}>
        {data.allGoogleFormResponses1Sheet.edges.map(edge => (
          <Company data={edge.node} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
