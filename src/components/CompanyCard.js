import React from "react"
import moment from "moment"

const CompanyCard = ({ data }) => {
  return (
    <div className="p-6 text-gray-900 bg-white rounded-lg shadow-md">
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
    </div>
  )
}

export default CompanyCard
