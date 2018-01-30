import React, { Component } from 'react'
import { toJS } from './middleware/to-js'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import _, { mapValues } from 'lodash'
import { makeDispatch } from './middleware/dispatcher'
import { cMsg } from '../intl/messages/common'
import { lMsg } from '../intl/messages/login'

class LoginComponent extends Component {

  componentWillReceiveProps(nextProps) {
    this.handleErrors(nextProps)
    this.handleSuccess(nextProps)
  }

  handleErrors(nextProps) {

  }

  handleSuccess(nextProps) {

  }

  render() {

    const { intl: { formatMessage }} = this.props

    return <div>
      {formatMessage(lMsg.email)}
      <input type="text" name="username" maxLength="50"/>
      {formatMessage(lMsg.password)}
      <input type="password" maxLength="16"/>
    </div>
  }
}

LoginComponent.PropTypes = {
  intl: intlShape.isRequired
}

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return mapValues({}, (action) => makeDispatch(dispatch, action))
}

export const Login = connect(null, mapDispatchToProps)(toJS(injectIntl(LoginComponent)))
export { Login as default }