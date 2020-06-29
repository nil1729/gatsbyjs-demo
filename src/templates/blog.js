import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Head from '../components/Head';
// import markdownStyles from '../styles/markdown.module.scss'; //! For Markdown files
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// TODO: Only for Markdown Files in Local File System
// export const query = graphql`
//     query ( $slug:String! )
//     {
//         markdownRemark (fields: {slug: {eq: $slug}}){
//             frontmatter {
//                 title
//                 author
//                 Date
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            publishedDate
            body {
                json
            }
        }
    }
`

const BlogTemplate = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const src = node.data.target.fields.file['en-US'].url;
                return <img src={src} alt={alt} />
            }
        }
    };
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <div className="container">
                <h1 className="display-4 text-center">{props.data.contentfulBlogPost.title}</h1>
                <p className="lead text-center text-danger">By Nilanjan Deb</p>
                <div className="jumbotron">
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate
