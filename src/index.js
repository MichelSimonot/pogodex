import React from 'react'
import ReactDOM from 'react-dom'

// Stores.
import useOption from './stores/Options'

// Components.
import OddFilter from './components/Filters/Odd'
import Generation from './components/Generation'

// Layout.
import CrossBar from './layout/CrossBar'

function PogoDex () {
  const [size, setSize] = useOption('TileSize', 'small')

  function onSizeChange (event) {
    const newSize = size === 'small' ? 'medium' : 'small'
    setSize(newSize)
  }

  const interiorStyle = {
    padding: '0.5em'
  }

  const bottomSection = {
    position: 'absolute',
    bottom: '0em',
    width: '100%'
  }

  const bottomControls = (
    <div style={bottomSection}>
      <CrossBar>
        Filters: <OddFilter />
      </CrossBar>
    </div>
  )

  return (
    <div>
      {
        // This will actually appear at the bottom, but the filters need to be
        //    rendered before the Generations, so it's here.
        bottomControls
      }
      <CrossBar>
        <input type='button' value='Toggle Size' onClick={onSizeChange} />
      </CrossBar>
      <div style={interiorStyle}>
        <h1>Hello World!</h1>
        <Generation number={1} />
        <Generation number={2} />
      </div>

    </div>
  )
}

ReactDOM.render(<PogoDex />, document.getElementById('app'))
