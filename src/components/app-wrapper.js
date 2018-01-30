import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { head } from 'lodash'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
addLocaleData([...en, ...fr])
import enLocale from '../intl/locales/en.json'
import frLocale from '../intl/locales/fr.json'

export const DEFAULT_APP_LOCALE = 'EN'

class AppWrapperComponent extends Component {

  render() {
    const { store, history, routes } = this.props

    const localeData = { en: enLocale, fr: frLocale }

    const messages = localeData.en

    return (
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_APP_LOCALE} messages={messages}>
          <Router history={history}>
            {routes}
          </Router>
        </IntlProvider>
      </Provider>
    )
  }
}

AppWrapperComponent.PropTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  routes: PropTypes.object
}

export const AppWrapper = AppWrapperComponent
export { AppWrapper as default }