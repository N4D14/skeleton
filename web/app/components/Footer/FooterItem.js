import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'utils/theme';
import { media } from 'utils/media';

const FooterItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const FooterItemHeader = styled.div`
  color: ${theme.footerItemHeader};
  font-family: ${theme.landingTitleFont};
  font-size: 0.8em;
  margin-bottom: 1em;
`;

/**
 * Render the footer for the public site
 */
const FooterItem = ({title, children}) => {
  return (
    <FooterItemWrapper>
      <FooterItemHeader>{title}</FooterItemHeader>
      {React.Children.toArray(children)}
    </FooterItemWrapper>
  );
}

FooterItem.propTypes = {
  title: PropTypes.string,
};

export default FooterItem;
