import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./store/reducers";
import {watchSaga} from "./store/saga";

const
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
  sagaMiddleware = createSagaMiddleware(),
  middlewares = [sagaMiddleware],
  store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(watchSaga);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <IntlProvider locale="en">
        <App/>
      </IntlProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
