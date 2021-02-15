import React from 'react';
import {graphql} from 'gatsby';
import {css} from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';


// because we passed slug as context, gatsby is going to set a graphql variable called slug
export const query = graphql`
query($slug: String!) {
    mdx(frontmatter: { slug: {eq: $slug}}){
      frontmatter {
        title
        author
      }
      body
    }
      
  }
`;

// data is PageContext
const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout>
        <h1 css={css`
          margin-bottom:0;
        `}
        >
          {post.frontmatter.title}</h1>
        <p 
            css={css`
            font-size: 0.75rem;
            margin-top:0;
            `}
        >
             posted by {post.frontmatter.author}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/"> &larr; back to all posts</ReadLink>

    </Layout>
)
export default PostTemplate;