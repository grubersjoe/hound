import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

import Header from '../components/Header';

const Layout = ({ children, data }) => {
  const PageContainer = styled('div')`
    margin: 0 auto;
    max-width: ${rhythm(22)};
    padding: ${rhythm(2)} 1.25rem;

    @media (min-width: 768px) {
      padding: ${rhythm(4.5)} 0;
    }
  `;

  // TODO: add meaningful description
  return (
    <PageContainer>
      <Helmet
        title={data.site.siteMetadata.title}
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content: 'Hound Hard Rock',
          },
        ]}
      />
      <Header />
      {children()}
    </PageContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
