import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import {Helmet} from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import styled from '@emotion/styled';

const Inner = styled('div')`
  width: 100%;
  padding: 0 6% 0 12%;
  margin-top: 40px;
`;


const Layout = ({ children,heading }) => {
  const {title, description } = useSiteMetadata();
  //heading = heading == null ? 'Contact' : heading; // this a hack! 
  
  return (
    <>
    <Global
      styles={css`
      html {
        box-sizing: border-box;
        font-size: 10px;
      }
    
      *, *:before, *:after {
        box-sizing: inherit;
      }
        html,
        body {
          padding: 0;
          margin: 0;
          font-size: 1.0rem;
          letter-spacing: 0.02rem;
          font-variant-ligatures: none;
          text-rendering: optimizelegibility;
          -webkit-font-smoothing: antialiased;
          text-decoration-skip-ink: auto;
          color: #212129;
          background: #FEFEFE;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          line-height: 1.4;
          
          *::selection {
            color: #212129;
            background: #78ffaa;
          }

        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #212129;
          
        }
        strong {
          color: #212129;
        }
      `}
    />
    <Helmet>
      <html lang="en"/>
      <title>{title}</title>
      <meta name="description" content={description}/>
    </Helmet>
    <Header heading={heading} />
    <main><Inner>{children}</Inner></main>
    </>
);}

export default Layout;