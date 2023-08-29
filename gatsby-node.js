const path = require("path")
const pageData = require("./src/data/images.js")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  pageData.forEeach(data => {
    const pagePath = `/${data.slug}`

    createPage({
      path: pagePath,
      component: path.resolve(`./src/components/model/index.tsx`),
      context: data,
    })
  })
}
