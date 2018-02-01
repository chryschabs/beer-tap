import React, { Component } from 'react'
import { toJS } from '../middleware/to-js'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import { mapValues } from 'lodash'
import { makeDispatch } from '../middleware/dispatcher'
import { rMsg } from '../../intl/messages/recipe'
import AutoComplete from 'material-ui/AutoComplete'

const styles = {
  container: {
    margin: 'auto',
    textAlign: 'left',
    display: 'inline-flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  defaultStyle: {
    alignSelf: 'center'
  }
}

class CreateRecipeBodyComponent extends Component {

  constructor(props) {
    super(props)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.state = {
      grains: []
    }
  }

  handleUpdateInput() {
    this.setState({
      grains: [
        'Carafa Special I Weyermann (320 SRM)',
        'Pale Malt 2 rows',
        'Midnight wheat'
      ]
    })
  }

  render() {
    const { intl: { formatMessage } } = this.props

    const grainLabel = formatMessage(rMsg.grain)

    return <div id="create-recipe-header-top-div"
                style={styles.container}>
      <div id="recipe-grain-search-header">
        <AutoComplete
          hintText={grainLabel}
          dataSource={this.state.grains}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    </div>
  }

}

CreateRecipeBodyComponent.PropTypes = {
  intl: intlShape.isRequired
}

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return mapValues({}, (action) => makeDispatch(dispatch, action))
}

export const CreateRecipeBody = connect(null, mapDispatchToProps)(toJS(injectIntl(CreateRecipeBodyComponent)))
export { CreateRecipeBody as default }