import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from "react-helmet";


const index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Hello</h1>
      <h2>I'm Nilanjan, a fullstack Developer living in Agartala</h2>
    </Layout>
  )
};

export default index;