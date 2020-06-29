import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import markdownStyles from '../styles/markdown.module.scss';

export const query = graphql`
    query ( $slug:String! )
    {
        markdownRemark (fields: {slug: {eq: $slug}}){
            frontmatter {
                title
                author
                Date
            }
            html
        }
    }
`

const BlogTemplate = (props) => {
    return (
        <Layout>
            <Helmet>
                <title>Blog | {props.data.markdownRemark.frontmatter.title}</title>
            </Helmet>
            <div className="conatainer">
                <h1 className="display-4 text-center">{props.data.markdownRemark.frontmatter.title}</h1>
                <p className="lead text-center" style={{ fontSize: '1.5em' }}>By <span className='text-danger'>{props.data.markdownRemark.frontmatter.author}</span></p>
                <hr className='my-3' />
                <div className="jumbotron px-4">
                    <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate
