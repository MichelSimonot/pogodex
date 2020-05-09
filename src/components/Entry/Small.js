import React from 'react'
import PropTypes from 'prop-types'

// Layouts.
import Tile from '../../layout/Tile'

export default function SmallEntry (props) {
  const { num } = props

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
