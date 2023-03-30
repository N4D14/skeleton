import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

import { Link } from 'react-router-dom';
import { media } from 'utils/media';

const NavBarLinkItem = styled(Link)`
  width: calc(100% - 2em);

  font-size: 0.8em;
  padding: 1em;
  margin: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  font-family: ${theme.font};
  color: ${theme.navBarText};

  &:hover {
    background: ${theme.offWhite};
    z-index: 2002;
  }

  &:active {
    background: ${theme.offWhite};
  }
`;

export default NavBarLinkItem;
