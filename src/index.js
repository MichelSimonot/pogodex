import React from 'react'
import ReactDOM from 'react-dom'

// Stores.
import useOption from './stores/Options'

// Components.
import SmallEntry from './components/Entry/Small'
import MediumEntry from './components/Entry/Medium'

// Layout.
import Board from './layout/Board'

function PogoDex () {
  const [size, setSize] = useOption('TileSize', 'small')

  // Test data.
  const tiles = Array.from(Array(15).keys()).map(num => {
    return size === 'small'
      ? <SmallEntry key={num} num={num} />
      : <MediumEntry key={num} num={num} />
  })

  function onSizeChange (event) {
    const newSize = size === 'small' ? 'medium' : 'small'
    setSize(newSize)
  }

  return (
    <div>
      <input type='button' value='Toggle Size' onClick={onSizeChange} />
      <h1>Hello World!</h1>
      <Board entries={tiles} />
    </div>
  )
}

ReactDOM.render(<PogoDex />, document.getElementById('app'))
