import React, { Component } from 'react'
import { toJS } from './middleware/to-js'
import { connect } from 'react-redux'
import _, { mapValues } from 'lodash'
import { makeDispatch } from './middleware/dispatcher'

const styles = {
  container: {
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
}

class MessageDisplayerComponent extends Component {

  componentWillReceiveProps(nextProps) {
    this.handleErrors(nextProps)
    this.handleSuccess(nextProps)
  }

  handleErrors(nextProps) {

  }

  handleSuccess(nextProps) {

  }

  render() {
    return <div id="message-displayer-top-level-div"
                style={styles.container}>
      { this.props.children }
    </div>
  }
}

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return mapValues({}, (action) => makeDispatch(dispatch, action))
}

export const MessageDisplayer = connect(null, mapDispatchToProps)(toJS(MessageDisplayerComponent))
export { MessageDisplayer as default }