import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'

// views
import AppView from './views/AppView'

// devtools
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const reducer = combineReducers({
  routing: routerReducer
})

const store = createStore(reducer, DevTools.instrument())

const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={AppView}/>
      </Router>
    </Provider>,
    document.getElementById('react-app')
  )
})
