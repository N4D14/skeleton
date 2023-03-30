import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';

// Import root app
import App from 'containers/App';
import Redirect404 from 'containers/Redirect404';

// Import selector for `syncHistoryWithStore`
import { makeSelectLocationState } from 'containers/App/selectors';

// Import favicon
// import '!file-loader?name=[name].[ext]!./favicon.ico';

// Import configre store function
import history from './utils/history';
import configureStore  from './store';

// Import CSS reset and Global Styles
import GlobalStyle from './global-style';

// Observe loading of Open Sans
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

/**
 * Render the main app wrapper and routes
 * @return {object}   rendered react component
 */
const render = () => {
  ReactDOM.render(
    // <div>Hello!!</div>,
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Route render={({ location }) => (
          location.state && location.state.is404
            ? <Redirect404 />
            : <App />
        )}/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );
};

// Call render
render();

// Lastly install offline runtime
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
