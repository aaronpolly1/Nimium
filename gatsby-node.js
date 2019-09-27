
const path = require(`path`)
const slash = require(`slash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions , reporter }) => {
  const { createPage } = actions
  const UseCaseTemplate = path.resolve(`src/templates/UseCaseTemplate.js`)
  // query content for WordPress posts
  const result = await graphql(`
  {
    allWordpressAcfUsecase {
      nodes {
        wordpress_id
      }
    }
  }
`)
 

  

 // Handle errors
 if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.

  result.data.allWordpressAcfUsecase.nodes.forEach((node, index) => {
  
    createPage({
      path : `/usecases/${node.wordpress_id}`,
      component: UseCaseTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id:node.wordpress_id,
        previousCase: result.data.allWordpressAcfUsecase.nodes[index -1],
        nextCase: result.data.allWordpressAcfUsecase.nodes[index +1],

      },
    })
  })
}



// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ graphql, actions, reporter }) => {
//     const { createPage } = actions
  
//     // Query for markdown nodes to use in creating pages.
    // const result = await graphql(
    //   `
    //   {
    //     allWordpressAcfUsecase {
    //       nodes {
    //         acf {
    //           name
    //         }
    //         wordpress_id
    //       }
    //     }
    //   }
    //   `
    // )
  
//     // Handle errors
//     if (result.errors) {
//       reporter.panicOnBuild(`Error while running GraphQL query.`)
//       return
//     }
  
//     // Create pages for each markdown file.
//     const UseCaseTemplate = path.resolve(`src/templates/UseCaseTemplate.js`)
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       const path = node.frontmatter.path
//       createPage({
//         path,
//         component: UseCaseTemplate,
//         // In your blog post template's graphql query, you can use path
//         // as a GraphQL variable to query for data from the markdown file.
//         context: {
//           path,
//         },
//       })
//     })
//   }