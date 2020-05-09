import React from 'react'
import ReactDOM from 'react-dom'

// Stores.
import useOption from './stores/Options'

// Components.
import OddFilter from './components/Filters/Odd'
import Generation from './components/Generation'

function PogoDex () {
  const [size, setSize] = useOption('TileSize', 'small')

  function onSizeChange (event) {
    const newSize = size === 'small' ? 'medium' : 'small'
    setSize(newSize)
  }

  const interiorStyle = {
    padding: '0.5em'
  }

  return (
    <div>
      <input type='button' value='Toggle Size' onClick={onSizeChange} />
      <div style={interiorStyle}>
        <h1>Hello World!</h1>
        <Generation number={1} />
        <Generation number={2} />
      </div>

    </div>
  )
}

ReactDOM.render(<PogoDex />, document.getElementById('app'))
