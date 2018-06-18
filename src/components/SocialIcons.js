import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/constants';
import IconFacebook from '../images/icons/icon-facebook.svg';
import IconYouTube from '../images/icons/icon-youtube.svg';
import IconBandcamp from '../images/icons/icon-bandcamp.svg';
import IconSoundcloud from '../images/icons/icon-soundcloud.svg';
import IconMail from '../images/icons/icon-mail.svg';

const SocialIcons = () => {
  const IconWrapper = styled('div')`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  `;

  const Link = styled('a')`
    margin: 0 0.6rem;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.04);
    }
    
    path {
      transition: fill 0.2s ease-in-out;
    }
    
    &:hover path:first-of-type {
      fill: ${colors.primary};
    }
  `;

  return (
    <IconWrapper>
      <Link
        href="https://www.facebook.com/hound.hardrock"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconFacebook />
      </Link>

      <Link href="https://www.youtube.com/channel/UCjo4kHe2v7mC1PBrECzL32w" target="_blank" rel="noopener noreferrer">
        <IconYouTube />
      </Link>

      <Link href="https://hound-hardrock.bandcamp.com/" target="_blank" rel="noopener noreferrer">
        <IconBandcamp />
      </Link>

      <Link href="https://soundcloud.com/hound-150658848" target="_blank" rel="noopener noreferrer">
        <IconSoundcloud />
      </Link>

      <Link href="mailto:hi@hound-band.com">
        <IconMail />
      </Link>
    </IconWrapper>
  );
};

export default SocialIcons;
