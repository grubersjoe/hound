import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import { blockMargin } from '../utils/constants';
import logoSvg from '../images/logo.svg';

const Header = () => {
  const Wrapper = styled('header')`
    margin-bottom: ${blockMargin};
    text-align: center;
  `;

  const Logo = styled('img')`
    display: block;
    margin: 0 auto ${rhythm(1)} auto;
    width: 320px;
    
    @media (min-width: 768px) {
      width: 360px;
    }
  `;

  const Title = styled('div')`
    text-transform: uppercase;
    font-weight: 800; 
    font-size: 16px;   
    
    @media (min-width: 768px) {
      font-size: 20px;
    }
  `;

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logoSvg} alt="Hound Hard" />
      </Link>
      <Title>Powered by Metalville / fd</Title>
    </Wrapper>
  );
};

export default Header;
