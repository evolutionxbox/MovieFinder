export const ENABLE_FILTER = 'ENABLE_FILTER'
export const DISABLE_FILTER = 'DISABLE_FILTER'

export function enableFilter(id, value) {
  return {
    type: ENABLE_FILTER,
    id
  }
}

export function disableFilter(id, value) {
  return {
    type: DISABLE_FILTER,
    id
  }
}
