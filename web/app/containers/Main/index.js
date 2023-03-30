import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';

import Header from 'components/Header';
import NavMenu from 'components/NavMenu';
import Page from './Page';
import Redirect404 from 'containers/Redirect404';
import theme from 'utils/theme';
import mainReducer from './reducer';

import { media } from 'utils/media';
import { nav } from './nav';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { setNavMenuVisibility } from './actions';
import { makeSelectNavMenuVisible } from './selectors';

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: ${theme.landingHeaderBackgroundDark};
`;

const InnerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: ${props => props.visible ? 'block' : 'none'};
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: Transparent;

  overflow-x: hidden;
`;


const MainPage = () => {
  return (<Page title={'App'} subtitle={'Welcome to the skeleton app!'} />);
};

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      if (this.props.navMenuOpen){
        this.props.onMenuClose();
      }
    }
  }

  render() {
    const path = this.props.location.pathname;
    let navItems = nav.filter(n => 'link' in n && !('mobileOnly' in n)).map(n => ({
      link: n.link,
      text: n.text,
      color: 'color' in n ? n.color : null,
      selected: (n.link === path)
    }));
    navItems = navItems.concat(nav.filter(n => 'dropdown' in n).map(n => ({
      dropdown: n.dropdown,
      text: n.text,
      color: 'color' in n ? n.color : null,
      selected: false //TODO search in nested for path
    })));
    return (
      <MainWrapper ref={this.vantaRef}>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Signal Fox public landing page.' },
          ]}
        />
        <NavMenu
          items={nav.filter(n => 'link' in n)}
          visible={this.props.navMenuOpen}
          onClose={this.props.onMenuClose}
        />
        <InnerWrapper visible={!this.props.navMenuOpen}>
          <Header navItems={navItems} onMenuIconClick={this.props.onMenuOpen} />
          <Switch >
            <Route exact path={'/'} component={MainPage} />
            <Route component={Redirect404} />
          </Switch>
        </InnerWrapper>
      </MainWrapper>
    );
  }
}

Main.propTypes = {
  navMenuOpen: PropTypes.bool,
  onMenuClose: PropTypes.func,
  onMenuOpen: PropTypes.func
};

/**
 * Map dispatch events to landing function properties
 * @param  {function} dispatch   dispatch to store
 * @return {object}              map of dispatch functions
 */
export function mapDispatchToProps(dispatch) {
  return {
    onMenuClose(evt) {dispatch(setNavMenuVisibility(false));},
    onMenuOpen(evt) {dispatch(setNavMenuVisibility(true));},
  };
}

/**
 * Maps state to landing props
 * @type {function}
 */
const mapStateToProps = createStructuredSelector({
  navMenuOpen: makeSelectNavMenuVisible(),
});

// Wrap the component to inject dispatch and state into it
const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);
export default injectReducer({key: 'main', reducer: mainReducer})(ConnectedMain);
