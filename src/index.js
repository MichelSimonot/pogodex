import React from 'react'
import ReactDOM from 'react-dom'

// Components.
import SmallEntry from './components/Entry/Small'

// Layout.
import Board from './layout/Board'

function PogoDex () {
  // Test data.
  const tiles = Array.from(Array(15).keys()).map(num => <SmallEntry key={num} num={num} />)

  return (
    <div>
      <h1>Hello World!</h1>
      <Board entries={tiles} />
    </div>
  )
}

ReactDOM.render(<PogoDex />, document.getElementById('app'))
