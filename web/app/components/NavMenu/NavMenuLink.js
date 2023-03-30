import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavMenuLink = styled(Link)`
  display: block;
  font-size: 2em;
  font-family: 'Roboto' sans-serif;
  padding: 0.2em 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: rgba(74, 74, 74, 1);

  &:hover {
    font-weight: 700;
  }

  &:active {
    font-weight: 700;
  }
`;

export default NavMenuLink;
