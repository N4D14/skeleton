import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import { Link } from 'react-router-dom';
import { media } from 'utils/media';

export const StyledHeaderLink = styled(Link)`
  display: block;
  font-size: 0.75em;
  /*line-height: 6em;*/
  padding: 0.3em 0.6em;
  margin-left: 0.25em;
  margin-right: 3em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${theme.navBarText};
  border: ${theme.landingTitleText} 1.5px solid;
  background: #ffffff;
  border-radius: 5px;

`;

const HeaderLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 0.5em;

  color: rgba(255, 105, 65, 1);

  &:hover {
    color: rgba(255, 105, 65, 1);
  }

  ${media.phone`
    display: none;
  `};
`;

const HeaderLink = ({to, text}) => {
  return (
    <HeaderLinkWrapper>
      <StyledHeaderLink to={to}>{text}</StyledHeaderLink>
    </HeaderLinkWrapper>
  );
}

export default HeaderLink;
