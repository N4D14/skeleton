import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

import { media } from 'utils/media';

const NavBarExternalLink = styled.a`
  display: block;
  font-size: 0.7em;
  padding: 0.25em 0;
  margin: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  font-family: ${theme.font};
  color: #aaaaaa;

  &:hover {
    color: #aaaaaa;
  }

  &:active {
    color: #aaaaaa;
  }

  ${media.tablet`
    padding: 0 0.75em;
  `}
`;

export default NavBarExternalLink;
