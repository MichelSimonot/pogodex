import React from 'react'
import PropTypes from 'prop-types'

export default function CrossBar (props) {
  const { children } = props

  const styles = {
    display: 'flex',
    flexDirection: 'row',

    borderTop: '1px solid black',
    borderBottom: '1px solid black',
  }

  return (
    <div style={styles}>
      { children }
    </div>
  )
}

CrossBar.propTypes = {
  children: PropTypes.any
}
