import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import { Link } from 'react-router-dom';
import { media } from 'utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledHeaderLink = styled(Link)`
  display: block;
  font-size: 0.75em;
  /*line-height: 6em;*/
  padding: 0.3em 0.6em;
  margin-left: 0;
  margin-right: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${theme.navBarText};
  border-radius: 5px;

`;

const IconWrapper = styled.div`
  margin-left: 3em;
  margin-right: 0.1em;
  font-size: 0.8em;
  color: ${theme.navBarText};
`;

const HeaderLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 0.25em;

  color: rgba(255, 105, 65, 1);

  &:hover {
    color: rgba(255, 105, 65, 1);
  }

  ${media.phone`
    display: none;
  `};
`;

const HeaderLoginLink = ({to, text}) => {
  return (
    <HeaderLinkWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon='user' />
      </IconWrapper>
      <StyledHeaderLink to={to}>{text}</StyledHeaderLink>
    </HeaderLinkWrapper>
  );
}

export default HeaderLoginLink;
