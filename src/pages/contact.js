import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Wave from '../components/wave';


export default () => (
  <Layout heading="Contact">
    
    <p>
      You can contact me at <a href="mailto:mfhodges95@gmail.com?subject=Hey%20%F0%9F%91%8B%20Loved%20your%20Website!">mfhodges95@gmail.com</a>
    </p>

    
    <h2>Or wave to me </h2>

    <p>Just click this button </p>

    <Wave />
    <p>
      Please note that I may not wave back because I am probably very far away
      and not looking in your direction.
    </p>
    <Link to="/">&larr; Back to home</Link>

  </Layout>
);