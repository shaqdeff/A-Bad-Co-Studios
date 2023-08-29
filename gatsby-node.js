const path = require("path")
const pageData = require("./src/data/images.js")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  pageData.forEach(data => {
    const pagePath = `/projects/gallery/${data.slug}`

    createPage({
      path: pagePath,
      component: path.resolve("./src/templates/imagePage.tsx"),
      context: {
        slug: data.slug,
      },
    })
  })
}
