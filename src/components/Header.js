import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
import 'typeface-pt-sans-narrow';
import logoSvg from '../images/logo.svg';

const Header = () => {
  const Wrapper = styled('div')`
    text-align: center;
  `;

  const Logo = styled('img')`
    display: block;
    margin: 0 auto 1rem auto;
    width: 360px;
  `;

  const Title = styled('div')`
    font-family: 'PT Sans Narrow', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
  `;

  return (
    <Wrapper>
      <Logo src={logoSvg} alt="Hound Hard" />
      <Title>Powered by Metalville / fd</Title>
    </Wrapper>
  );
};

export default Header;
