const path = require("path")
const pageData = require("./src/data/images.json")
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })

  pageData.forEach(data => {
    const pagePath = `/${data.slug}`:
      
    createPage({
      path: pagePath,
      component: path.resolve("./src/components/gallery/index.jsx"),
      context: data
    })
  })
}
