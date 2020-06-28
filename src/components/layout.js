import React from 'react'
import { Helmet } from "react-helmet";
import '../styles/index.scss';
import Navbar from './Navbar';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
            </Helmet>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
