import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { handleHistoryChange } from './helpers/history-listener'
import { buildStore } from './helpers/store'
import { getRoutes } from './routes'
import { AppWrapper } from './components/app-wrapper'

const store = buildStore()
const history = syncHistoryWithStore(browserHistory, store)
const container = document.getElementById('root')

const routes = getRoutes()

history.listen(location => handleHistoryChange(store, location))

render(
  <AppWrapper store={store} history={history} container={container} routes={routes}/>,
  container
)