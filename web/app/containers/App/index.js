import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Main from 'containers/Main';
import Redirect404 from 'containers/Redirect404';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faAngleRight,
);

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;


/**
 * App wrapper: contains public and private sites
 * @param {list} children      child components to render
 */
const App = () => {
  const outer = document.getElementById('app');
  let match = useRouteMatch();
  return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s"
          defaultTitle=""
          meta={[
            { name: 'description', content: 'Same application' },
          ]}
        />
        <Switch>
          <Route path='/' component={Main} />
          <Route component={Redirect404} />
        </Switch>
      </AppWrapper>
  );
}



export default App;
