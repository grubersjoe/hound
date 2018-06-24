import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import { blockMargin } from '../utils/constants';

const Footer = () => {
  const Wrapper = styled('footer')`
    margin-bottom: ${blockMargin};
    font-weight: 700;
  `;

  return (
    <Wrapper>
      <Link to="/about/">About</Link>
    </Wrapper>
  );
};

export default Footer;
