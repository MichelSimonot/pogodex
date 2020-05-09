import createCollection from './createCollection'

/**
 * Collection of Entry filters.
 * id = name of the filter, state = the filter function itself.
 */
const filters = createCollection()

export default function useFilter(id, initialState) {
  // Since you can't store a function as state (otherwise React thinks you want
  //   lazy initial state), wrap it to be an object instead.
  // Ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [state, setState] = filters.useStore(id, { filter: initialState })
  return [state.filter, (value) => setState({ filter: value })]
}

export function getFilters () {
  return Object.keys(filters.stores)
}
