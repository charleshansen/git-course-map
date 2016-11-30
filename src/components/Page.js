import React from 'react'
import node from '../node'

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
    <svg height="350" width="500" style={{backgroundColor: 'orange'}}>
      {root.paintOnSvg()}
    </svg>
  </div>
)