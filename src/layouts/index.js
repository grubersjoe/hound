import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

import Seo from '../components/Seo';
import Header from '../components/Header';

const Layout = ({ children, data }) => {
  const PageContainer = styled('div')`
    margin: 0 auto;
    max-width: ${rhythm(20)};
    padding: ${rhythm(2)} 1.25rem;

    @media (min-width: 768px) {
      padding: ${rhythm(4.5)} 0;
    }
  `;

  return (
    <PageContainer>
      <Seo siteMetadata={data.site.siteMetadata} />
      <Header />
      {children()}
    </PageContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
