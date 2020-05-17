import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import FadeInText from './fadeInText';


const ImageBackground = styled(BackgroundImage)`
    
    background-position: top 20% center;
    background-size: cover;
    height: 50vh;

    + * {
        margin-top: 0;
    }
`; 

const TextBox = styled('div')`
    background-image: linear-gradient(to top, #f6faf7dd 2rem,#f6faf700);
    display:flex;
    flex-direction: column;
    height:100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%;

    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }
    p,
    a {
        color : #222;
        margin-top: 0;
    }

    a {
        margin-top: 0.5rem;
    }
`;

const Hero = () => {
    const {image} = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "philly.jpg" }) {
                sharp: childImageSharp {
                 fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `)

    return (
        <>
        <FadeInText as='h1'
        duration={0.6}
        initialOpacity={0.01} >
        Maddy Hodges
        </FadeInText>
        <h2>okay at computer</h2>
        </>
    )

   /* return (
        <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextBox>
            <h1> Frontend Masters + Gatsby &hearts; </h1>

            <p>
                 Hello Philly <Link to='/about/'>Learn more about me &rarr;</Link>
            </p>
            </TextBox>
        </ImageBackground>
    )*/
};

export default Hero;