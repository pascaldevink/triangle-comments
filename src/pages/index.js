import React from 'react';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Button from '../components/Button';
import FeaturesSection from '../components/layout/sections/FeaturesSection';
import Section from '../components/layout/Section';
import GetStartedSection from '../components/layout/sections/GetStartedSection';
import '../components/style.css';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero>
        <Title>COMMENTS DONE RIGHT</Title>
        <SubTitle>
          The simplest, easiest and best way to add comments to a static
          website.
        </SubTitle>
        <ButtonWrapper>
          <Button link='/signup'>Get Started</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button link='/'>Learn More</Button>
        </ButtonWrapper>
      </Hero>
      <FeaturesSection />
      <GetStartedSection />
      <SEO title='Home' />
    </Layout>
  );
};

export const IndexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 48px;
  font-family: 'overpass', sans-serif !important;
  margin-bottom: 16px;
`;

const SubTitle = styled.h2`
  color: rgba(81, 160, 249, 0.4);
`;

const ButtonWrapper = styled.div`
  @media (max-width: 520px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  padding: 8px 18px !important;
  margin-left: -18px;
  width: fit-content;
  display: inline-block;
  button {
    margin: 0 !important;
  }
`;

export default IndexPage;
