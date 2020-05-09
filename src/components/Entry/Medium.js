import React from 'react'
import PropTypes from 'prop-types'

// Layouts.
import Tile from '../../layout/Tile'

// Effects.
import useFilteredEntry from '../../effects/Filtered'

export default function MediumEntry (props) {
  const { num } = props

  // Check whether this entry should be filtered out.
  const isFiltered = useFilteredEntry({ num })
  if (isFiltered) {
    return ''
  }

  const tileStyles = {
    // Provide the base width for Medium tiles.
    // TODO: I probably want to change this to 'content' once the entries have
    //    actual [consistent-width] content.
    flexBasis: '10em'
  }

  return (
    <Tile tileStyles={tileStyles}>
      Medium Test #{num}
    </Tile>
  )
}

MediumEntry.propTypes = {
  num: PropTypes.number
}
