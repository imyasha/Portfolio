import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';
import Button from 'Atoms/Button';

interface IProps {
  data: {
    contentfulItem: {
      title: string;
      description: string;
      featured_image: {
        fluid: any;
      };
      type: string;
      content: {
        json: any;
      };
      technologies: string[];
      url: string;
    };
  };
  pageContext: {
    previous: {
      slug: string;
      title: string;
    } | null;
    next: {
      slug: string;
      title: string;
    } | null;
  };
}

const PortfolioItem = ({ data, pageContext }: IProps) => {
  const {
    title,
    description,
    featured_image: image,
    type,
    content: { json: content },
    technologies,
    url,
  } = data.contentfulItem;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO title={title} description={description} />
      <Image fluid={image.fluid} alt={title} style={{ maxHeight: '400px' }} />
      <Container>
        <h2 data-testid="projectTitle">{title}</h2>
        <h3 data-testid="projectType">{type}</h3>
        <div data-testid="projectBody">
          {documentToReactComponents(content)}
        </div>
        <p data-testid="projectTechnologies">
          <strong>Technologies used:</strong> {technologies.join(', ')}
        </p>
        <Button
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="projectLink"
        >
          Visit project
        </Button>
        <Pagination>
          {previous && (
            <li data-testid="previous">
              <Link to={`/portfolio/${previous.slug}/`} rel="prev">
                &laquo; {previous.title}
              </Link>
            </li>
          )}
          {next && (
            <li data-testid="next">
              <Link to={`/portfolio/${next.slug}/`} rel="next">
                {next.title} &raquo;
              </Link>
            </li>
          )}
        </Pagination>
      </Container>
    </>
  );
};

export default PortfolioItem;

const Image = styled(Img)`
  margin-top: 2rem;
`;

const Pagination = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    a {
      color: #ccc;
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        color: #999;
      }
    }
  }
`;

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulItem(slug: { eq: $slug }) {
      title
      client
      type
      technologies
      url
      description
      content {
        json
      }
      featured_image {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
