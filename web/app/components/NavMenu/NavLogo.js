import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLogoWrapper = styled.div`
  display: block;
  max-width: 180px;
  height: auto;
  font-size: 1em;
  padding: 0 1.5em 2em;
  color: rgba(203, 204, 208, 1);
`;

const NavLogo = ({src, alt}) => {
  return (
    <NavLogoWrapper ><FontAwesomeIcon icon={src}/></NavLogoWrapper>
  );
};

export default NavLogo;
