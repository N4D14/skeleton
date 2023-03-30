import styled from 'styled-components';
import { media } from 'utils/media';

const MenuButton = styled.button`
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: Transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: 0;
  color: rgba(265, 105, 60, 1);
  border: none;
  font-size: 1em;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2em;
    height: 0.3em;
    border-top: 0.9em double rgba(265, 105, 60, 1);
    border-bottom: 0.3em solid rgba(265, 105, 60, 1);
  }
`;

export default MenuButton;
