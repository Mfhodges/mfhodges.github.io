import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';



export default () => (
  
  <Layout heading="About">
   
    <p>
      Hi, I’m Maddy! I’m a web developer from Philadelphia. I currently work as
      Application Developer for the University of Pennsylvania in the Teaching,
      Research and Learning Services department within the Van Pelt Library. I
      architect and manage applications that manage the University’s LMS Canvas.
    </p>
    <p>
      I started this website to help me better document things I am learning and
      to house lil’ snippets of things I think are neat.
    </p>
    <Link to="/">&larr; Back to home</Link>
  
  </Layout>
  
);