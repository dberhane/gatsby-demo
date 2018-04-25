const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const allQueries = require(`./src/queries/allQueries`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Templates
    const pageTemplate = path.resolve("./src/templates/page.js");
    const postTemplate = path.resolve("./src/templates/post.js");
    const postCategoryTemplate = path.resolve("./src/templates/post-category.js")

    resolve(
      graphql(allQueries).then(result => {
        if (result.errors) reject(result.errors)

        // Pages detail
        const pages = result.data.allWordpressPage.edges

        pages.forEach(edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        // Posts detail
        const posts = result.data.allWordpressPost.edges

        createPaginatedPages({
          edges: posts,
          createPage: createPage,
          pageTemplate: "src/templates/index.js",
          pageLength: 10,
          pathPrefix: ""
        })

        posts.forEach(edge => {
          createPage({
            path: `/post/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          });
        })

        const postCategories = result.data.allWordpressPost.edges

        createPaginatedPages({
          edges: postCategories,
          createPage: createPage,
          pageTemplate: "src/templates/post-categories.js",
          pageLength: 10,
          pathPrefix: "category"
        })

        postCategories.forEach(({node}) => {
          
          node.categories.forEach((category) => {
           console.log(category)
            createPage({
              path: `/category/${category.slug}/`,
              component: slash(postCategoryTemplate),
              context: {
                name: category.name,
              },
            });
  

          })
  
  
        })      

      })
    )
  });
};