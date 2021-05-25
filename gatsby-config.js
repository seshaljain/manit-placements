const { name, description, author, project } = require("./package.json")

require("dotenv").config()

const buildCredentials = ({
  SPREADSHEET_ID,
  PROJECT_ID,
  PRIVATE_KEY,
  PRIVATE_KEY_ID,
  CLIENT_EMAIL,
  CLIENT_ID,
}) => ({
  spreadsheetId: SPREADSHEET_ID,
  credentials: {
    type: "service_account",
    project_id: PROJECT_ID || project.id,
    private_key_id: PRIVATE_KEY_ID || project.keyId,
    private_key: (PRIVATE_KEY || project.key).replace(/(\\r)|(\\n)/g, "\n"),
    client_email: CLIENT_EMAIL || project.email,
    client_id: CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(
      CLIENT_EMAIL || project.email
    )}`,
  },
})

module.exports = {
  siteMetadata: {
    title: "MANIT Placements 2021",
    author: "archgaelix",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheets",
      options: buildCredentials(process.env),
    },
  ],
}
