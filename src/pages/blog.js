import React from 'react'
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import Head from '../components/Head';
import { Link } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              id
              title
              publishedDate (formatString: "MMMM Do, YYYY")
              slug             
            }
          }
        }
      }
    `);
  return (
    <Layout>
      <Head title="Blogs" />
      <div className="container">
        <h1 className="display-4 text-center my-2">My Blogs</h1>
        <div className="container my-3">
          <div className="list-group">
            {
              data.allContentfulBlogPost.edges.map(post => (
                <div key={post.node.id} className="my-2 list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <Link to={post.node.slug} className='lead text-warning' style={{ fontSize: '1.6em' }}>{post.node.title}</Link>
                    <small style={{ fontSize: '100%' }}>{post.node.publishedDate}</small>
                  </div>
                  {/* <p className="my-1" style={{ fontWeight: '100' }}>{post.node.excerpt}</p> */}
                  <br />
                  <small className='text-info' style={{ fontSize: '100%', fontWeight: '100' }}>By Nilanjan Deb</small>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
