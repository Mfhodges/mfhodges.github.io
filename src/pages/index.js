import React from 'react';

import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import FadeInText from '../components/fadeInText';
//import Insta from '../components/insta';
//import Goodreads from '../components/goodreads';


const Heading= () => {
    const {title} = {title:"Maddy Hodges"};    
    return (
      <>
        <FadeInText
          as='h1'
          duration={0.6}
          initialOpacity={0.01}
        >
          {title}
        </FadeInText>
        <h2>Software Engineer</h2>
      </>
    )
  }




export default () => {
const posts = usePosts();

return (
<Layout heading={< Heading />}>
<h2>Read my posts</h2>
{posts.map( post => (
    <PostPreview key={post.slug} post={post} />
))}
{/*<Goodreads />*/}
</Layout>
);}