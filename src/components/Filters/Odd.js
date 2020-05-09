import React from 'react'
import PropTypes from 'prop-types'

// Stores.
import useFilter from '../../stores/Filters'

export default function OddFilter (props) {
  const [filter, setFilter] = useFilter('OddIndex', undefined)
  const isChecked = Boolean(filter)

  function filterFunction (entry) {
    return entry && (entry.num % 2) === 1
  }

  function onChange (event) {
    setFilter(event.target.checked ? filterFunction : undefined)
  }

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap'
  }

  return (
    <div style={styles}>
      Odd only?
      <input type='checkbox' checked={isChecked} onChange={onChange} />
    </div>
  )
}
