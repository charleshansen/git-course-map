import React from 'react'

import node from '../node'

const root = node('foo', [
  node('bar'),
  node('gaz', [
    node('leaf1'),
    node('leaf2'),
  ]),
  node('urk', [
    node('leaf3', [
      node('leaf4'),
      node('leaf5'),
      node('leaf6')
    ]),
    node('leaf7')
  ])
])

export default () => (
  <pre>{root.toString()}</pre>
)