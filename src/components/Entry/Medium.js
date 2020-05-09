import React from 'react'
import PropTypes from 'prop-types'

// Layouts.
import Tile from '../../layout/Tile'

export default function MediumEntry (props) {
  const { num } = props

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
