const companyTemplate = require("path").resolve("src/templates/JobPage.js")

exports.createPages = ({ actions, graphql, reporter }) =>
  graphql(`
    {
      googleSheet {
        Responses {
          id
          companyName
          position
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(
        '🚨  ERROR: Loading "createPages" query',
        result.errors
      )
    }
    const { createPage } = actions
    const { googleSheet } = result.data
    googleSheet.Responses.forEach(({ companyName, position, id }) => {
      if (companyName === null || position == null) return
      createPage({
        path: [companyName, position]
          .map(uri =>
            uri
              .toString()
              .replace(/(\s+|#)/g, "-")
              .toLowerCase()
          )
          .join("/"),
        component: companyTemplate,
        context: { id },
      })
    })
  })
