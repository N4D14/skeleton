import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'utils/theme';
import { media } from 'utils/media';
import NavBar from 'components/NavBar';
import SocialMediaBar from 'components/SocialMediaBar';

import FooterItem from './FooterItem';
import Address from './Address';

import {
  Wrapper,
  TopWrapper,
  Divider,
  CopyrightWrapper
} from './Wrapper';

const CopyrightText = styled.div`
  color: #aaaaaa;
  font: ${theme.font};
  font-size: 0.7em;

  ${media.phone`
    font-size: 1em;
  `};
`;

const FoxImage = styled.img`
  margin: 0 1em 0 0.5em;
  width: 20px;

  ${media.phone`
    margin: 0 0 0 0.5em;
    width: 30px;
  `};
`;

/**
 * Render the footer for the public site
 */
const Footer = ({show, id, navItems, socialItems}) => {
  const addressLines = ['252 Nassau St.', 'Princeton, NJ 08542'];
  return (
    <Wrapper id={id} show={show}>
        <TopWrapper>
          <FooterItem title={'Website'}>
            <NavBar items={navItems} light={false} vertical={true}/>
          </FooterItem>
          <FooterItem title={'Address'}>
            <Address lines={addressLines} />
          </FooterItem>
          <FooterItem title={'Social'}>
            <SocialMediaBar items={socialItems} light={false} />
          </FooterItem>
        </TopWrapper>
        <Divider />
        <CopyrightWrapper>
          <CopyrightText>&copy; 2021 My Company</CopyrightText>
        </CopyrightWrapper>
    </Wrapper>
  );
}

Footer.propTypes = {
  id: PropTypes.string,
  navItems: PropTypes.array,
  socialItems: PropTypes.array,
};

export default Footer;
