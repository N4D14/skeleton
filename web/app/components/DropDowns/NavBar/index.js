import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import theme  from 'utils/theme';

import DropDownBase from 'components/DropDowns';
import Image from 'components/Image';
import NavBarLinkItem from './NavBarLinkItem';
import NavBarExternalLinkItem from './NavBarExternalLinkItem';
import NavBarButtonItem from './NavBarButtonItem';


export const Wrapper = styled.div`
  display: block;
  position: relative;
  outline: none;
  cursor: pointer;
  padding: ${props => props.vertical ? '0.25em 0': '0 1.5em'};
  font-weight: ${props => props.selected ? 700 : 400};

  &:focus {
    outline: none;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  padding: 0 0.25em 0 0;
  margin: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  color: ${theme.navBarText};
  font-size: 0.75em;
  font-family: ${theme.font};

  &:hover {
    color: ${theme.navBarTextDark};
  }

  &:active {
    font-weight: 700;
  }
`;


const Chevron = styled.div`
  &:before {
    border-style: solid;
    border-width: 1px 1px 0 0;
    content: '';
    display: inline-block;
    height: 8px;
    left: 10px;
    position: relative;
    top: 5px;
    transform: rotate(135deg);
    vertical-align: top;
    width: 8px;
    color: ${theme.navBarText};
  }
`;

const ChevronR = styled(Chevron)`
  &:before {
    left: 10px;
    top: 10px;
    transform: rotate(-45deg);
  }
`;


export const MenuWrapper = styled.div`
  font-size: 1em;
  position: absolute;
  top: 1.2em;
  right: -22px;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  z-index: 2000;
  padding-top: 1.4em;

  width: 200px;

  ${Wrapper}:hover & {
    display: ${props => props.show ? 'flex' : 'none'};
  }
`;

class NavBarDropDown extends DropDownBase {

  onBlur(evt) {
    evt.persist();
  }

  render() {
    if (this.props.items === undefined) return null;
    const r = this.state.show ? 270 : 90;
    const icon = this.state.show ? <ChevronR />: <Chevron />;
    const content = this.props.items.map((item, index) => {
      let options = index === 0 ? {top: 'top'} : {data: 'border'};
      if (index === this.props.items.length-1){
        options.bottom = 'bottom';
      }
      if('link' in item) {
        return <NavBarLinkItem
          key={`item-${index}`}
          to={item.link}
          onClick={this.closeDropDown}
          {...options}>
          {item.text}
        </NavBarLinkItem>
      } else if ('external' in item) {
        return <NavBarExternalLinkItem
          key={`item-${index}`}
          href={item.external}
          target={'_blank'}
          onClick={() => {}}
          {...options}>
          {item.text}
        </NavBarExternalLinkItem>
      } else {
        return <NavBarButtonItem
          key={`item-${index}`}
          onClick={item.action}
          {...options}>
          {item.text}
        </NavBarButtonItem>
      }
    });
    return (
      <Wrapper
        onBlur={this.onBlur}
        tabIndex={0}
        vertical={this.props.vertical}
        onMouseEnter={this.openDropDown}
        onMouseLeave={this.closeDropDown}>
        <TitleWrapper >
          <Title>{this.props.text}</Title>
          {icon}
        </TitleWrapper>
        <MenuWrapper id='NavMenuMain' show={this.state.show}>
          {content}
        </MenuWrapper>
      </Wrapper>
    );
  }
}

NavBarDropDown.propTypes = {
  items: PropTypes.array
}

export default NavBarDropDown;
