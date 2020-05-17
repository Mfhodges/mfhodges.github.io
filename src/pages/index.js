import React from 'react';

import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import FadeInText from '../components/fadeInText';
import Insta from '../components/insta';


const Heading= () => {
    const {title} = {title:"Maddy Hodges"};
    //const { jobPosition: { title: jobTitle, company, url } } = 
    
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
        {/*<h2>{jobTitle} at <ExternalLink href={url} >{company}</ExternalLink></h2>*/}
      </>
    )
  }




export default () => {
const posts = usePosts();

return (
<>
<Layout heading={< Heading />}>
<h2>Read my posts </h2>
{posts.map( post => (
    <PostPreview key={post.slug} post={post} />
))}
<Insta />
</Layout>
</>
);}