import React from 'react';
import Layout from '../components/layout';
import front from '../images/front.png'
import back from '../images/back.jpg';
import Head from '../components/Head';

const index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className="container text-center">
        <h1 className="display-4">
          Welcome to Gatsby Noob
        </h1>
        <p className="lead" style={{ fontSize: '1.5em' }}>Hi, I am Nilanjan</p>
        <hr className='bg-light' />
      </div>
      <div className="container my-3">
        <h1 style={{ fontWeight: '100' }} className="text-center mb-5">My Skills</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3 border-warning">
              <h3 className="card-header text-center">Frontend</h3>
              <img src={front} style={{ height: 'auto', width: '100%', display: 'block' }} alt="Card image" />
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">HTML, CSS, Javascript</li>
                <li className="list-group-item lead">Bootstrap, Materialize CSS</li>
                <li className="list-group-item lead">React JS</li>
              </ul>
              <div className="card-footer text-center">
                <a href="https://github.com/nil1729" target="_blank" className='text-light'><p className="lead mb-0 font-weight-bold">View Projects</p></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card mb-3 border-warning">
              <h3 className="card-header text-center">Backend</h3>
              <img src={back} style={{ height: 'auto', width: '100%', display: 'block' }} alt="Card image" />
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">Node JS</li>
                <li className="list-group-item lead">MongoDB</li>
                <li className="list-group-item lead">Express JS</li>
              </ul>
              <div className="card-footer text-center">
                <a href="https://github.com/nil1729" target="_blank" className='text-light'><p className="lead mb-0 font-weight-bold">View Projects</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default index;