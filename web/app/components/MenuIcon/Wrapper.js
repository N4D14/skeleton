import styled from 'styled-components';
import { media } from 'utils/media';

const Wrapper = styled.div`
  display: none;
  height: 1.5em;
  width: 2em;
  margin: 0 1em 0 0;
  padding: 0;

  ${media.phone`
    display: block;
  `};
`;

export default Wrapper;
