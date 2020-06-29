import React from 'react'
import Layout from '../components/Layout';
import Head from '../components/Head';
const Contact = () => {
    const inputStyle = () => {
        return {
            fontSize: '1.2em'
        };
    };
    return (
        <Layout >
            <Head title="Contact" />
            <div className="container text-center mt-2">
                <h1 className='display-4'>Contact Me</h1>
                <h3 style={{ fontWeight: '100' }}>Get in Touch</h3>
                <div className="container mt-3 text-center">
                    <form>
                        <div className="row">
                            <div className="col-md-6 form-group mt-3">
                                <input style={inputStyle()} type="text" className="form-control" placeholder="Enter your Name" />
                            </div>
                            <div className="col-md-6 form-group mt-3">
                                <input style={inputStyle()} type="email" className="form-control" placeholder="Enter your Email Address" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group col-sm-12">
                                <textarea style={inputStyle()} className="form-control" id="exampleTextarea" rows="5" placeholder="Eneter Your Message"></textarea>
                            </div>
                        </div>
                        <button style={inputStyle()} className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact