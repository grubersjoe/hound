import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { blockMargin } from '../utils/constants';

const Footer = () => {
  const Wrapper = styled('footer')`
    margin-bottom: ${blockMargin};
    font-weight: 600;
  `;

  return (
    <Wrapper>
      <a
        href="https://www.facebook.com/Metalville/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: '1rem' }}
      >
        Powered by Metalville
      </a>
      <Link to="/about/">About</Link>
    </Wrapper>
  );
};

export default Footer;
