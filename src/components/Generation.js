import React from 'react'
import PropTypes from 'prop-types'

// Stores.
import useOption from '../stores/Options'

// Components.
import SmallEntry from './Entry/Small'
import MediumEntry from './Entry/Medium'

// Layout.
import Board from '../layout/Board'

export default function Generation (props) {
  const { number } = props

  const [size] = useOption('TileSize', 'small')

  const range = genRanges[number - 1]
  const indexes = Array(range.amount).fill(undefined).map((val, index) => {
    return index + range.start
  })

  // Test data.
  const tiles = indexes.map(num => {
    return size === 'small'
      ? <SmallEntry key={num} num={num} />
      : <MediumEntry key={num} num={num} />
  })

  return (
    <div>
      <h4>Generation {number}</h4>
      <Board entries={tiles} />
    </div>
  )
}

Generation.propTypes = {
  number: PropTypes.number.isRequired
}

const genRanges = [
  { start: 1, amount: 10 },
  { start: 11, amount: 5 },
]
