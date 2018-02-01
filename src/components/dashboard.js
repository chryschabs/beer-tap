import React, { Component } from 'react'
import { toJS } from './middleware/to-js'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import _, { mapValues } from 'lodash'
import { makeDispatch } from './middleware/dispatcher'
import { rMsg } from '../intl/messages/recipe'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import CreateRecipeHeader from './recipes/create-recipe-header'
import CreateRecipeBody from './recipes/create-recipe-body'

class DashboardComponent extends Component {

  getDefaultAction() {
    return <div id="create-recipe-top-div">
      <CreateRecipeHeader />
      <CreateRecipeBody />
    </div>
  }

  render() {
    const { intl: { formatMessage } } = this.props

    const defaultTitle = formatMessage(rMsg.createRecipeTitle)

    return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div id="dashboard-top-div">
        <AppBar title={defaultTitle}/>
        {this.getDefaultAction()}
      </div>
    </MuiThemeProvider>
  }
}

DashboardComponent.PropTypes = {
  intl: intlShape.isRequired
}

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return mapValues({}, (action) => makeDispatch(dispatch, action))
}

export const Dashboard = connect(null, mapDispatchToProps)(toJS(injectIntl(DashboardComponent)))
export { Dashboard as default }