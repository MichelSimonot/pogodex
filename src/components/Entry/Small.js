import React from 'react'
import PropTypes from 'prop-types'

// Layouts.
import Tile from '../../layout/Tile'

// Effects.
import useFilteredEntry from '../../effects/Filtered'

export default function SmallEntry (props) {
  const { num } = props

  // Check whether this entry should be filtered out.
  const isFiltered = useFilteredEntry({ num })
  if (isFiltered) {
    return ''
  }

  const tileStyles = {
    // Provide the base width for Small tiles.
    // TODO: I probably want to change this to 'content' once the entries have
    //    actual [consistent-width] content.
    flexBasis: '7em'
  }

  return (
    <Tile tileStyles={tileStyles}>
      Small Test #{num}
    </Tile>
  )
}

SmallEntry.propTypes = {
  num: PropTypes.number
}
