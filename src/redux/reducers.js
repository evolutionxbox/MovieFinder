import { ENABLE_FILTER, DISABLE_FILTER } from './actions'

function filters(state, action) {
  switch (action.type) {
    case ENABLE_FILTER:
      return {
        ...state,
        filters: state.filters.map(filter => (filter.id === action.id) ? { ...filter, isEnabled: true } : filter)
      }
    case DISABLE_FILTER:
      return {
        ...state,
        filters: state.filters.map(filter => (filter.id === action.id) ? { ...filter, isEnabled: false } : filter)
      }
    default:
      return state
  }
}


const movieFinderApp = filters
 
export default movieFinderApp