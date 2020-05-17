import React from 'react';

import styled from '@emotion/styled';
import {css} from '@emotion/core';
import {Link } from 'gatsby';
import FadeInText from './fadeInText';

/* Styled Component */
const NavLink = styled(Link)`
color: #FEFEFE;
font-weight: ${props => props.fontWeight || 'normal'};
font-size: 1rem;
line-height:1;
margin: 0 0.5rem 0 0;
padding: 0 0.25rem;
text-decoration:none;

&.current-page {
    border-bottom: 2px solid #FEFEFE;
}

&:last-of-type {
  margin-right:0;  
}
`;

const Wrapper = styled('header')`
  display: flex;
  justify-content: center;
  height: 220px;
  background: #212129;


  .heading {
    flex: 1;

    h1, h2 {
      color: #FEFEFE;
      font-weight: 900;
      font-size: 3.5rem;
      margin: 0;
    }

    h2 {
      font-weight: 700;
      font-size: 2.0rem;
    }
  }

  .nav {
    text-align: right;

    li {
      list-style: none;
      font-size: 1.8rem;
      text-transform: lowercase;
      margin: 0;
      line-height: 1.7rem;
    }

  }
`;


const Heading = ({ data }) => (
  <div className='heading'>
    {typeof data === 'string' ?
      <Link to='/'><h1>{data}</h1></Link> :
      data
    }
  </div>
)

const Inner = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6% 0 12%;
  margin-top: 40px;

`;





const Header = ({ heading }) => (
  <Wrapper>
    <Inner>
    <Heading data={heading} />
    {/* navigation */}
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" activeClassName="current-page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="current-page">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="current-page">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </Inner>
  </Wrapper>
);

export default Header;

/**
 * 
 *  <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
 */