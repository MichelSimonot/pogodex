import React from 'react'
import PropTypes from 'prop-types'

export default function Tile (props) {
  const { children, tileStyles = {} } = props

  const styles = {
    // Add a border around the Tile with rounded edges.
    border: '1px solid black',
    borderRadius: '9px',

    // Pad the inside of the border, and only slightly outside the border.
    padding: '1em',
    margin: '0.25em',

    // Children should be completely centred.
    display: 'flex',
    justifyContent: 'center',

    // Whatever custom styles the parent component passed in.
    ...tileStyles
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.any.isRequired,
  tileStyles: PropTypes.object
}
