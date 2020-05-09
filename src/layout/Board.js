import React from 'react'
import PropTypes from 'prop-types'

export default function Board (props) {
  const { entries } = props

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  return (
    <div style={styles}>
      { entries }
    </div>
  )
}

Board.propTypes = {
  entries: PropTypes.array
}
