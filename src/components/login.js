import React, { Component } from 'react'
import { toJS } from './middleware/to-js'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { intlShape, injectIntl } from 'react-intl'
import _, { mapValues } from 'lodash'
import { makeDispatch } from './middleware/dispatcher'
import { cMsg } from '../intl/messages/common'
import { lMsg } from '../intl/messages/login'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const styles = {
  container: {
    margin: 'auto',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '300px',
    alignContent: 'space-between'
  },
  credentialStyle: {
    alignSelf: 'center'
  }
}

class LoginComponent extends Component {

  redirectToDashboard() {
    this.props.goToDashboard()
  }

  render() {

    const { intl: { formatMessage } } = this.props
    const emailLabel = formatMessage(lMsg.email)
    const passwordLabel = formatMessage(lMsg.password)
    const loginLabel = formatMessage(lMsg.login)

    return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div style={styles.container}>
        <TextField style={styles.credentialStyle}
                   maxLength="50"
                   hintText={emailLabel}/>
        <TextField style={styles.credentialStyle}
                   maxLength="16"
                   floatingLabelText={passwordLabel}
                   type="password"/>
        <RaisedButton label={loginLabel}
                      primary={true}
                      onClick={this.redirectToDashboard.bind(this)}/>
      </div>
    </MuiThemeProvider>
  }
}

LoginComponent.PropTypes = {
  intl: intlShape.isRequired
}

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return mapValues({
    goToDashboard: () => dispatch(push('/dashboard'))
  }, (action) => makeDispatch(dispatch, action))
}

export const Login = connect(null, mapDispatchToProps)(toJS(injectIntl(LoginComponent)))
export { Login as default }