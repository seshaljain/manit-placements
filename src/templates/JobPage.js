import React from "react"
import { graphql } from "gatsby"
import moment from "moment"

import Layout from "../components/Layout"
import CompanyCard from "../components/CompanyCard"
import Seo from "../components/Seo"

import { badge } from "./JobPage.module.css"

const RoundInfo = ({ rounds, interviewCount }) => {
  return (
    <ul className="list-none flex flex-wrap mt-2 text-md">
      {rounds &&
        rounds.split(", ").map(roundName => {
          return (
            <li className={badge}>
              {roundName}
              {roundName == "Technical Interview" &&
                interviewCount > 0 &&
                ` (${interviewCount})`}
            </li>
          )
        })}
    </ul>
  )
}

const JobPage = ({ data: { googleResponsesSheet: company } }) => {
  const eligibleDepts =
    company.eligibleDepartments.split(", ").length === 7
      ? "All Branches"
      : company.eligibleDepartments
  const totalSelections = [
    company.cSE,
    company.chem,
    company.civil,
    company.eCE,
    company.elec,
    company.mME,
    company.mech,
  ].reduce((a, b) => +a + +b)
  const selectionCount =
    totalSelections !== 0 ? `${totalSelections} selected` : "TBA"
  return (
    <Layout>
      <Seo title={`${company.position} @ ${company.companyName}`} />

      <div className="p-6 text-gray-900 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold leading-none uppercase">
          {company.position} @ {company.companyName}
        </h2>
        <ul className="list-none flex flex-wrap mt-4 text-md">
          <li className={`${badge}`}>{`💰 ${company.cTC__LPA_} LPA `}</li>
          <li className={`${badge}`}>{`📜 > ${company.minimumGPA} GPA `}</li>
          <li className={`${badge}`}>{`✅ ${selectionCount} `}</li>
          <li className={`${badge}`}>
            {`🏛 ${
              company.eligibleDepartments.split(", ").length === 7
                ? "All Branches"
                : company.eligibleDepartments
            } `}
          </li>
          <li className={`${badge}`}>
            {`🗓 ${moment(company.date, "MM/DD/YYYY").format("MMM DD, YYYY")} `}
          </li>
        </ul>

        <hr className="my-4" />
        <h3 className="text-2xl font-bold">Rounds</h3>
        {company.rounds ? (
          <>
            <RoundInfo
              rounds={company.rounds}
              interviewCount={company.numberOfTechnicalInterviews}
            />
          </>
        ) : (
          "🤵 TBA"
        )}
        <hr className="my-4" />
        <h3 className="text-2xl font-bold">Interview Experiences</h3>
        <p>
          Purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum. Id neque
          aliquam vestibulum morbi blandit cursus risus, at ultrices mi tempus
          imperdiet nulla malesuada! Imperdiet dui accumsan sit amet nulla
          facilisi morbi tempus iaculis urna, id volutpat lacus laoreet non
          curabitur gravida.
        </p>
        <p className="mt-2">
          Please help future MANIT batches by adding yours! Fill in{" "}
          <a className="underline">this</a> Google form or contact{" "}
          <a
            href="https://github.com/seshaljain/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Seshal Jain
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}
export default JobPage

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
      cSE
      chem
      civil
      eCE
      elec
      mME
      mech
      rounds
      numberOfTechnicalInterviews
    }
  }
`
