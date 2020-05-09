import { useState, useLayoutEffect } from 'react'

/*
 * "Store" concept taken from kedge: https://github.com/MattStypa/kedge
 * Modified to:
 *  - Group stores into collections (just because. Organization?).
 *  - Not require a store to be created ahead of time (same as useState).
 */

/**
 * Create a collection of stores.
 * @method createCollection
 * @return {Object} The collection of stores and the hook for using them.
 */
export default function createCollection () {
  const stores = {}

  /**
   * Create a store to hold a piece of state.
   * Wraps React's useState hook to offer the same benefits, just with two additions:
   *    - the state is stored outside of React, so it's not lost on unrender.
   *    - multiple components can acccess the same store, to share the state.
   * @method createStore
   * @param  {Any} initialState
   * @return {Store}
   */
  function createStore (initialState) {
    const store = {
      state: initialState,
      dispatchers: []
    }

    /*
     * Subscribe for changes to the store's state.
     * When a component uses a store (via useStore), useStore will give React's
     *    dispatcher (from useState) to the store. This allows the store to
     *    set the React state whenever its state changes.
     */
    store.subscribe = dispatcher => {
      const index = store.dispatchers.push(dispatcher)
      // Unsubscribe the dispatcher by removing its reference in the store.
      return () => {
        store.dispatchers[index - 1] = null
      }
    }

    /*
     * Set the state of the store.
     * When a component uses a store (via useStore), it will receive this
     *    function as a dispatcher. It behaves the same as React's dispatcher
     *    (from useState). All components that have used this store (ie. given
     *    it a dispatcher), will be updated with the new state.
     */
    store.set = newState => {
      store.state = newState
      store.dispatchers.forEach(dispatch => {
        dispatch && dispatch(newState)
      })
    }

    return store
  }

  /**
   * Use a store.
   * Intended to be used the same way that React's `useState` is used.
   * @method useStore
   * @param  {string} id        A value to identify this specific store.
   * @param  {Any} initialState
   * @return The same value as you get from a `useState` hook.
   */
  function useStore (id, initialState) {
    // Get an existing or create a new store.
    let store = stores[id]
    if (!store) {
      store = createStore(initialState)
      stores[id] = store
    }

    // Use useState, because we're just wrapping it's behaviour.
    const [state, dispatcher] = useState(store.state)

    // Subscribe to changes to the store. Provide React's dispatcher, so that
    //    the store calls it when it's state changes.
    useLayoutEffect(() => store.subscribe(dispatcher), [])

    // Mimic useState's return value.
    return [state, store.set]
  }

  return { stores, useStore }
}
