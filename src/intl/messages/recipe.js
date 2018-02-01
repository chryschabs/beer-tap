import { defineMessages } from 'react-intl'

const recipe = defineMessages({
  createRecipeTitle: {
    id: 'recipe.createRecipeTitle',
    defaultMessage: 'Create recipe'
  },
  beerName: {
    id: 'recipe.beerName',
    defaultMessage: 'Beer name'
  },
  beerNameHint: {
    id: 'recipe.beerNameHint',
    defaultMessage: 'Think of something cool.'
  },
  beerBrewhouseEfficiency: {
    id: 'recipe.beerBrewhouseEfficiency',
    defaultMessage: 'Efficiency'
  },
  beerBrewhouseEfficiencyHint: {
    id: 'recipe.beerBrewhouseEfficiencyHint',
    defaultMessage: 'In % or leave empty.'
  },
  desiredFinalVolume: {
    id: 'recipe.desiredFinalVolume',
    defaultMessage: 'Desired final volume'
  },
  desiredFinalVolumeHint: {
    id: 'recipe.desiredFinalVolumeHint',
    defaultMessage: 'In Liters, that\'s right.'
  },
  grain: {
    id: 'recipe.grain',
    defaultMessage: 'Grain...'
  }
})

export { recipe as rMsg }
export { recipe as default }