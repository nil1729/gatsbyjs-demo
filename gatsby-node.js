const path = require("path")
module.exports.onCreateNode = ({
  node,
  actions
}) => {
  const {
    createNodeField
  } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  const blogTemplate = path.resolve(__dirname, 'src', 'templates', 'blog.js');

  // TODO : Only For Markdown files in Local File System
  // const res = await graphql(`
  //     query {
  //       allMarkdownRemark(sort: {fields: [frontmatter___Date], order: DESC}) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  // `);
  //! Contentful Blogs
  const res = await graphql(`
    query {
      allContentfulBlogPost{
        edges {
          node {
            slug        
          }
        }
      }
    }  
  `)
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  })
}