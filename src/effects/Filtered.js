import { useLayoutEffect, useState } from 'react'

// Stores.
import useFilter, { getFilters } from '../stores/Filters'

/**
 * Checks whether the provided Entry is caught by any of the current filters.
 * @method useFilteredEntry
 * @param  {Entry} entry
 * @return {Boolean}
 */
export default function useFilteredEntry (entry) {
  const [isFiltered, setFiltered] = useState(false)

  const filterList = getFilters()
  const filters = filterList.map(filterKey => {
    // You aren't suppose to call hooks in loops. To make sure that this doesn't
    //    break, we need to ensure that the number of filters is _always_ the
    //    same. Othwerwise, "Uncaught Error: Rendered fewer hooks than expected."
    return useFilter(filterKey)[0]
  })

  useLayoutEffect(() => {
    const result = filters.some(filter => {
      return filter && filter(entry)
    })

    setFiltered(result)
  })

  return isFiltered
}
