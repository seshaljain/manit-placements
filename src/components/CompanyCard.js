import React from "react"
import moment from "moment"

const CompanyCard = ({ details }) => {
  const eligibleDepts =
    details.eligibleDepartments.split(", ").length === 7
      ? "All Branches"
      : details.eligibleDepartments

  const totalSelections = [
    details.cSE,
    details.chem,
    details.civil,
    details.eCE,
    details.elec,
    details.mME,
    details.mech,
  ].reduce((a, b) => +a + +b)
  const selectionCount =
    totalSelections !== 0 ? `${totalSelections} selected` : "TBA"
  return (
    <div className="p-6 text-gray-900 bg-white rounded-lg shadow-md">
      <div>
        <h4 className="text-xl font-semibold leading-none uppercase">
          {details.companyName}
        </h4>
        <p className="flex justify-between mt-2 text-md">
          <span className="mr-4">{`🤵 ${details.position} `}</span>
          <span>{`💰 ${details.cTC__LPA_} LPA `}</span>
        </p>
      </div>

      <div className="flex xs:flex-col md:flex-row">
        <p className="flex flex-col flex-grow mr-4">
          <span>{`🏛 ${eligibleDepts} `}</span>
          <span>
            {`🗓 ${moment(details.date, "MM/DD/YYYY").format("MMM DD, YYYY")} `}
          </span>
        </p>
        <p className="flex flex-col items-end">
          <span>{`📜 > ${details.minimumGPA} GPA `}</span>
          <span>{`✅ ${selectionCount} `}</span>
        </p>
      </div>
    </div>
  )
}

export default CompanyCard
