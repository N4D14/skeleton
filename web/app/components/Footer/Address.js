import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'utils/theme';
import { media } from 'utils/media';

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const AddressLine = styled.div`
  color: ${theme.footerAddressText};
  font-family: ${theme.font};
  font-size: 0.7em;
  margin-bottom: 0.75em;
  margin-top: 0.25em;
`;

/**
 * Render the footer for the public site
 */
const Address = ({lines}) => {
  const content = lines.map((l, i) => {
    return (
      <AddressLine key={`address-${i}`}>{l}</AddressLine>
    );
  });
  return (
    <AddressWrapper>
      {content}
    </AddressWrapper>
  );
}

Address.propTypes = {
  lines: PropTypes.array,
};

export default Address;
