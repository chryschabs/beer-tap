import React, { Component } from 'react'
import { toJS } from '../middleware/to-js'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import { mapValues } from 'lodash'
import { makeDispatch } from '../middleware/dispatcher'
import { rMsg } from '../../intl/messages/recipe'
import TextField from 'material-ui/TextField'

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

class CreateRecipeHeaderComponent extends Component {

  render() {
    const { intl: { formatMessage } } = this.props

    const beerNameLabel = formatMessage(rMsg.beerName)
    const beerNameHintLabel = formatMessage(rMsg.beerNameHint)

    const desiredFinalVolumeLabel = formatMessage(rMsg.desiredFinalVolume)
    const desiredFinalVolumeHintLabel = formatMessage(rMsg.desiredFinalVolumeHint)

    const efficiencyLabel = formatMessage(rMsg.beerBrewhouseEfficiency)
    const efficiencyHintLabel = formatMessage(rMsg.beerBrewhouseEfficiencyHint)

    return <div id="create-recipe-header-top-div"
                style={styles.container}>
      <TextField maxLength="20"
                 floatingLabelText={beerNameLabel}
                 hintText={beerNameHintLabel}/>
      <TextField type="number"
                 floatingLabelText={desiredFinalVolumeLabel}
                 hintText={desiredFinalVolumeHintLabel}/>
      <TextField type="number"
                 floatingLabelText={efficiencyLabel}
                 hintText={efficiencyHintLabel}/>
    </div>
  }

}

CreateRecipeHeaderComponent.PropTypes = {
  intl: intlShape.isRequired
}

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return mapValues({}, (action) => makeDispatch(dispatch, action))
}

export const CreateRecipeHeader = connect(null, mapDispatchToProps)(toJS(injectIntl(CreateRecipeHeaderComponent)))
export { CreateRecipeHeader as default }