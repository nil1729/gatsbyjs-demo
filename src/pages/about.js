import React from 'react'
import Layout from '../components/layout';
import photo from '../images/photo.png';
import { Link } from 'gatsby';
import Head from '../components/Head';
const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className="container">
                <h1 className="display-4 text-center my-2">About Me</h1>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <img src={photo} alt="MY__Image" className="img-fluid" />
                        </div>
                        <div className="col-md-8 col-sm-12 my-auto">
                            <p className="lead">Hello, my name is</p>
                            <h2>Nilanjan Deb</h2>
                            <p style={{ fontSize: '1.2em', fontWeight: '100', letterSpacing: '0.3px' }}>
                                I'm a full-stack developer specialised in frontend and backend development. I write about web development on my blog. Want to know how I may help your project? Check out my project case studies and resume.
                            </p>
                            <Link style={{ fontSize: '1.1em' }} to='/contact' className="btn btn-primary">Hire Me</Link>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default About
