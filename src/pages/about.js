import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';



export default () => (
  
  <Layout heading="About">
   
    <p>
      Hi, I’m Maddy! I’m a Software Engineer from Philadelphia. I currently work as
      Fullstack Software Engineer for HealthVerity.
    </p>
    <p>
      I started this website to help me better document things I am learning and
      to house lil’ snippets of things I think are neat.
    </p>
    <Link to="/">&larr; Back to home</Link>
  
  </Layout>
  
);