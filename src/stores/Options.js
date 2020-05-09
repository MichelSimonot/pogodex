import createCollection from './createCollection'

const options = createCollection()

export default function useOption(id, initialState) {
  return options.useStore(id, initialState)
}
