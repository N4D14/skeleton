import React from 'react';
import { media} from 'utils/media';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-between;
  align-items: ${props => props.direction === 'column' ? 'flex-start' : 'center'};
  padding: 0;

  ${media.phone`
    display: none;
  `};
`;

export default Wrapper;
