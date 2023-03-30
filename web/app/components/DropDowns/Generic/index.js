import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import theme  from 'utils/theme';

import DropDownBase from 'components/DropDowns';
import GenericItem from './GenericItem';

export const Wrapper = styled.div`
  display: block;
  position: relative;
  outline: none;
  cursor: pointer;
  width: ${props => props.width ? props.width : '25%'};

  &:focus {
    outline: none;
  }
`

export const MenuWrapper = styled.div`
  font-size: 1em;
  position: absolute;
  top: 2em;
  left: 0;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  border: ${theme.filterMenuBorderDark} solid 2px;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 0 rgba(0,0,0,0.33);
  z-index: 2000;
  margin-top: 1em;
  width: 100%;

  &:before {
     content:"";
     position: absolute;
     left: 30px;
     top: -10px;
     width: 15px;
     height: 15px;
     border-left: 2px solid ${theme.filterMenuBorderDark};
   	 border-top: 2px solid ${theme.filterMenuBorderDark};
     background: white;
     border-top-left-radius: 5px;
     -webkit-transform:rotate(45deg);
     transform:rotate(45deg);
  }
`;

const DropDownDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.background ? props.background : 'Transparent'};
  border-radius: 5px;
  padding: 0.25em 0;
  border: ${theme.filterMenuBorderLight} solid 2px;
`;

const DropDownLabel = styled.div`
  padding: 0.25em 1em;
  font-size: 0.64em;
  font-family: ${theme.font};
  color: ${theme.filterMenuColor};
`;

const IconWrapper = styled.div`
  padding: 0 1em 0 0;
`;

class GenericDropDown extends DropDownBase {
  constructor(props) {
    super(props);

    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(f) {
    return (evt) => {
      f(evt);
      this.closeDropDown(evt);
    }
  }

  render() {
    if (this.props.items === undefined || this.props.items.length == 0) return <div/>;

    const r = this.state.show ? 270 : 90;
    const selected = this.props.items.find(item => item.selected);
    const label = selected !== undefined ? selected.label : '';
    const content = this.props.items.map((item, index) => {
      return <GenericItem
        key={`generic-item-${index}`}
        top={index===0}
        bottom={index===(this.props.items.length-1)}
        selected={item.selected}
        onClick={this.setSelected(item.onClick)}
      >{item.label}</GenericItem>
    });
    return (
      <Wrapper onBlur={this.onBlur} tabIndex={0} width={this.props.width}>
        <DropDownDisplay onClick={this.toggleShow} background={this.props.background}>
          <DropDownLabel>{label}</DropDownLabel>
          <IconWrapper>
            <FontAwesomeIcon
              icon="angle-right"
              rotation={r}
              color={`${theme.darkGrey}`}
            />
          </IconWrapper>
        </DropDownDisplay>
        <MenuWrapper show={this.state.show}>
          {content}
        </MenuWrapper>
      </Wrapper>
    );
  }
}

GenericDropDown.propTypes = {
  items: PropTypes.array
};

GenericDropDown.defaultProps = {
  width: '25%',
};

export default GenericDropDown;
