import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';


const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);
    return (
        <div className="container p-1 text-center footer mt-5">
            <p className="lead">Made with <span className="text-danger">{'\u2764'}</span> by {data.site.siteMetadata.author}</p>
        </div>
    )
}

export default Footer
