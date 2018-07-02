import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Seo = ({ siteMetadata }) => (
  <Helmet
    title={siteMetadata.title}
    htmlAttributes={{ lang: 'en' }}
  >
    <meta name="description" content={siteMetadata.description} />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  </Helmet>
);

Seo.propTypes = {
  siteMetadata: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Seo;
