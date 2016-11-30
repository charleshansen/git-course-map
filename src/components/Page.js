import React from 'react'

import node from '../node'
import Square from './svg/Square'

const root = node('foo', 0, [
  node('bar', 1),
  node('gaz', 2, [
    node('leaf1', 3),
    node('leaf2', 4),
  ]),
  node('urk', 5, [
    node('leaf3', 6, [
      node('leaf4', 7),
      node('leaf5', 8),
      node('leaf6', 9)
    ]),
    node('leaf7', 10)
  ])
])

export default () => (
  <div>
    <pre>{root.toString()}</pre>
    <svg height="800" width="500" style={{backgroundColor: 'orange'}}>
      {root.paintOnSvg()}
    </svg>
    <svg height="210" width="500" style={{backgroundColor: 'green'}}>
      <Square size="15" x="0" y="0"/>
      <Square size="15" x="0" y="50"/>
      <Square size="15" x="0" y="100"/>
      <line x1="0" y1="0" x2="200" y2="200" style={{stroke: 'rgb(255,0,0)', strokeWidth: 2}}/>
    </svg>
  </div>
)