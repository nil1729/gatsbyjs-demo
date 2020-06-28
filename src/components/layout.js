import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet";
const Layout = ({ children }) => {
    const linkStyle = () => {
        return {
            color: 'white'
        }
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
            </Helmet>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <Link className="navbar-brand" to='/'>Gatsby Noob</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
        </>
    )
}

export default Layout
