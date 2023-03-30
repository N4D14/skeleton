import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import debounce from 'lodash/debounce';
import theme from 'utils/theme';
import Input from 'components/BasicForm/Input';
import {media} from 'utils/media';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

const NameFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-bottom: 0.3em;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: ${props => props.padding ? props.padding : '0.3em 0'};
  border: ${theme.formLineGrey} solid 1px;
  width: 100%;
`;

const SearchIconWrapper = styled.div`
  padding: 0 0.5em;
  color: ${theme.formLineGrey};
  font-size: 0.8em;
`;

const ToggleIconWrapper = styled.div`
  padding: 0 0.5em;
  color: ${theme.formLineGrey};
  font-size: 1em;
`;

const NameFilterInput = styled(Input)`
  border: none;
  margin: 0;
  padding: 0.4em 0;
  flex-grow: 1;
  font-size: ${theme.formFontSize};

  &:hover {
    outline: none;
    box-shadow: none;
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;


class NameFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const r = this.props.show ? 270 : 90;
    const padding = this.props.padding ? this.props.padding : '0.3em 0';
    const pholder = this.props.placeholder ? this.props.placeholder : 'Search by Name';
    return (
      <NameFilterWrapper >
        <SearchWrapper padding={padding}>
          <SearchIconWrapper>
            <FontAwesomeIcon icon='search' />
          </SearchIconWrapper>
          <NameFilterInput
            type='text'
            placeholder={pholder}
            value={this.props.nameFilter}
            onChange={this.props.setNameFilter}
            width={'100%'} />
          <ToggleIconWrapper>
            <FontAwesomeIcon
              icon="angle-right"
              rotation={r}
            />
          </ToggleIconWrapper>
        </SearchWrapper>
      </NameFilterWrapper>
    )
  }
};


// Wrap the component to inject dispatch and state into it
export default NameFilter;
