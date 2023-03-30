import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from 'components/Image';
import DropDownBase from 'components/DropDowns';
import MultiSelectMenu from './MultiSelectMenu';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

class MultiSelectDropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = this.props.items.length === 0 ? <div/> : <MultiSelectMenu
      items={this.props.items}
      selected={this.props.selected}
      onSelectItems={this.props.onSelectItems}
      force={this.props.force}
      singleSelect={this.props.singleSelect}
      padding={this.props.padding}
      placeholder={this.props.placeholder}
      alwaysOpen={this.props.alwaysOpen}
    />;
    return (
      <Wrapper>
        {menu}
      </Wrapper>
    );
  }
}

MultiSelectDropDown.propTypes = {
  items: PropTypes.array,
  onClickItem: PropTypes.func
}

MultiSelectDropDown.defaultProps = {
  singleSelect: false
}

export default MultiSelectDropDown;
