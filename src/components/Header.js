import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { blockMargin } from '../utils/constants';
import logoSvg from '../images/logo.svg';

const Header = () => {
  const Wrapper = styled('div')`
    margin-bottom: ${blockMargin};
    text-align: center;
  `;

  const Logo = styled('img')`
    display: block;
    margin: 0 auto ${rhythm(1)} auto;
    width: 360px;
  `;

  const Title = styled('div')`
    text-transform: uppercase;
    font-weight: 800;    
    font-size: 20px;
  `;

  return (
    <Wrapper>
      <Logo src={logoSvg} alt="Hound Hard" />
      <Title>Powered by Metalville / fd</Title>
    </Wrapper>
  );
};

export default Header;
