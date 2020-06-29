import React from 'react'
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from "react-helmet";
import moment from 'moment';
import { Link } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark(sort: {fields: [frontmatter___Date], , order: DESC}) {
            edges {
              node {
                id
                excerpt
                frontmatter {
                  title
                  Date
                  author
                }
                fields {
                  slug
                }
              }
            }
          }
        }
    `);
  return (
    <Layout>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className="container">
        <h1 className="display-4 text-center my-2">My Blogs</h1>
        <div className="container my-3">
          <div className="list-group">
            {
              data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id} className="my-2 list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <Link to={post.node.fields.slug} className='lead text-warning' style={{ fontSize: '1.6em' }}>{post.node.frontmatter.title}</Link>
                    <small style={{ fontSize: '100%' }}>{moment(post.node.frontmatter.Date, "YYYYMMDD").fromNow()}</small>
                  </div>
                  <p className="my-1" style={{ fontWeight: '100' }}>{post.node.excerpt}</p>
                  <br />
                  <small className='text-info' style={{ fontSize: '100%', fontWeight: '100' }}>By {post.node.frontmatter.author}</small>
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
