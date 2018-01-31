import React, { Component } from 'react'
import { toJS } from './middleware/to-js'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import _, { mapValues } from 'lodash'
import { makeDispatch } from './middleware/dispatcher'
import { cMsg } from '../intl/messages/common'

class DashboardComponent extends Component {
  render() {
    return <div/>
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