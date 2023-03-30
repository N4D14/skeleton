import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SocialMediaStyledLink = styled.a`
  display: block;
  font-size: 1em;
  padding: 0;
  margin: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: rgba(155, 155, 155, 1);

  &:hover {
    color: rgba(155, 155, 155, 1);
  }

  &:active {
    color: rgba(155, 155, 155, 1);
  }
`;

const SocialMediaStyledLinkLight = styled(SocialMediaStyledLink)`
  color: rgba(74, 74, 74, 1);

  &:hover {
    color: rgba(265, 105, 60, 1);
  }

  &:active {
    color: rgba(60, 60, 60, 1);
  }
`;

/**
 * SocialMediaBar Link
 * @param {string} to     link url
 * @param {string} iconClass     icon css class
 * @param {bool} light     light or dark style
 */
const SocialMediaLink = ({to, icon, light}) => {
  const L = light === true ? SocialMediaStyledLinkLight : SocialMediaStyledLink;
  return (
    <L href={to} target='_blank'>
      <FontAwesomeIcon icon={icon} />
    </L>
  );
}

export default SocialMediaLink;
