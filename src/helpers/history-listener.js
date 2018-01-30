let initialPop = true
export function handleHistoryChange({ dispatch, getState }, location) {
  if (initialPop) {
    initialPop = false
    return
  }
  const { action, pathname = '' } = location
  if (action === 'POP' && !pathname.startsWith('/public')) {
    console.log('something to do !')
  }
}

export const historyListener = {
  handleHistoryChange
}
export { historyListener as default }