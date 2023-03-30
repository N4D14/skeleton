import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'utils/theme';
import isEqual from 'lodash/isEqual';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MultiSelectMenuItem from './MultiSelectMenuItem';

import NameFilter from './NameFilter';

export const Wrapper = styled.div`
  display: block;
  position: relative;
  outline: none;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }
`

export const MenuWrapper = styled.div`
  font-size: 1em;
  position: absolute;
  top: 2em;
  left: -1px;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border: ${theme.formLineGrey} solid 1px;
  border-top: #888888 solid 2px;
  border-radius: 0 0 5px 5px;
  z-index: 10050;
  margin-top: 0;
  max-height: 500px;
  overflow-y: scroll;

  width: 100%;

`;

const DropDownDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 100%;
  padding: ${props => props.padding ? props.padding : '0'};
`;

const SelectAllLabel = styled.div`
`;

const Divider = styled.div`
  width: 14%;
  border-bottom: ${theme.filterMenuBorderLightest} 2px solid;
  margin-bottom: 0.2em;
  margin-bottom: 0.3em;
`;

const IconWrapper = styled.div`
  padding: 0 1em 0 0;
`;

const inFilter = (label, nameFilter) => {
  return label.toLowerCase().includes(nameFilter.toLowerCase()) && label.toLowerCase() !== 'all';
};

const isSelected = (value, selected) => {
  return selected !== null && selected.has(value);
}

export class MultiSelectMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      selected: null,
      nameFilter: ''
    }
    this.setSelected = this.setSelected.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.allSelected = this.allSelected.bind(this);
    this.toggleAllSelected = this.toggleAllSelected.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.setNameFilter = this.setNameFilter.bind(this);
  }

  setNameFilter(evt) {
    this.setState({nameFilter: evt.target.value});
  }

  setSelected(item) {
    return (evt) => {
      let newSelected = this.state.selected;
      if (this.state.selected == null) {
        newSelected = new Set(this.props.selected);
      }
      // If the item is already selected, remove it from the path
      // If the item is NOT selected, add it to the path
      if (newSelected == null) {
        this.setState({
          selected: new Set([item.value])
        });
      } else {
        if (newSelected.has(item.value)) newSelected.delete(item.value);
        else newSelected.add(item.value);
      }
      if (this.props.force == true) {
        this.props.onSelectItems(newSelected)(evt);
      } else {
        this.setState({
          selected: newSelected
        });
      }
    }
  }

  allSelected() {
    let result = true;
    let count = 0;
    const selected = this.state.selected === null ? new Set(this.props.selected) : this.state.selected;
    const items = this.props.items.filter(
      item => inFilter(item.label, this.state.nameFilter)
    );
    while (result && count < items.length){
      if (!selected.has(items[count].value)) result = false;
      count += 1;
    }
    return result;
  }

  toggleAllSelected(evt) {
    const all = this.allSelected();
    const items = this.props.items.filter(
      item => inFilter(item.label, this.state.nameFilter)
    );
    const selected = this.state.selected === null ? new Set(this.props.selected) : this.state.selected;
    if (all === false) {
      // Select all the currently visible menu items
      items.forEach((item, i) => {
        // If the item is already selected, do nothing
        // If the item is NOT selected, add it to the path
        if (!selected.has(item.value)) {
          selected.add(item.value);
        }
      });
    } else {
      // Unselect all the menu items
      items.forEach((item, i) => {
        // If the item is already selected, remove it
        // If the item is NOT selected, do nothing
        if (selected.has(item.value)) {
          selected.delete(item.value);
        }
      });
    }
    if (this.props.force == true) {
      this.props.onSelectItems(selected)(evt);
    } else {
      this.setState({
        selected: selected
      });
    }
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  onBlur(evt) {
    evt.persist();
    setTimeout(() => {
      // evt.target.type === text if we're coming from the search Input
      // in that case we don't want the menu to close
      // UNLESS the active element is the body
      const moveOut = evt.target.tagName !== 'INPUT' && !evt.target.contains(document.activeElement);
      const inputToBody = evt.target.tagName === 'INPUT' && document.activeElement.tagName === 'BODY';
      if (moveOut || inputToBody) {
        if (this.state.selected) this.props.onSelectItems(this.state.selected)(evt);
        this.setState({
          show: false,
        });
      }
    },0);
  }

  render() {
    let label = '';
    const items = this.props.items.filter(
      item => inFilter(item.label, this.state.nameFilter)
    );
    const selected = (this.state.selected === null || this.props.force) ? new Set(this.props.selected) : this.state.selected;
    const content = items.map((item, i) => {
      const itemSelected = isSelected(item.value, selected);
      if (itemSelected) label += item.label + ',';
      let options = {border: 'border'};
      if (i === (items.length-1)){
        options = Object.assign(options, {bottom: 'bottom'});
      }
      return (
        <MultiSelectMenuItem
          key={`filter-menu-item-${i}`}
          selected={itemSelected}
          onClick={this.setSelected(item)}
          {...options}
        >
          {item.label}
        </MultiSelectMenuItem>
      );
    });
    let options = {top: 'top'};
    if (items.length > 0) {
      content.splice(0, 0, (
        [
        <MultiSelectMenuItem
          key={`filter-menu-select-all`}
          selected={this.allSelected()}
          onClick={this.toggleAllSelected}
          {...options}
        >
          <SelectAllLabel>{'Select All'}</SelectAllLabel>
        </MultiSelectMenuItem>,
        <Divider key='divider' />
       ]
      ));
    }
    if (label === '') label = 'All'
    else label = label.slice(0, label.length-1);
    const ddOptions = {};
    if (this.props.padding !== undefined && this.props.padding !== null) {
      ddOptions.padding = this.props.padding;
    }
    return (
      <Wrapper onBlur={this.onBlur} tabIndex={0} >
        <DropDownDisplay onClick={this.toggleShow} {...ddOptions}>
          <NameFilter
            nameFilter={this.state.nameFilter}
            setNameFilter={this.setNameFilter}
            placeholder={this.props.placeholder}
            show={this.state.show}
            {...ddOptions}
          />
        </DropDownDisplay>
        <MenuWrapper show={this.state.show} >
          {content}
        </MenuWrapper>
      </Wrapper>
    );
  }
};

MultiSelectMenu.propTypes = {
  items: PropTypes.array,
  force: PropTypes.bool
}

MultiSelectMenu.defaultProps = {
  force: false
}

export default MultiSelectMenu;
