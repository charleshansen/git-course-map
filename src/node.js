import React from 'react'

import Square from './components/svg/Square'

class Node {
  constructor(name, childNumber = 7, children = []) {
    this.name = name
    this.childNumber = childNumber
    this.children = children
  }

  toString() {
    const childrenStrings = this.children
      .map(c => c.toStringWithOffset(1))
      .join('\n')
    return `${this.name} ${this.childNumber}\n${childrenStrings}`
  }

  toStringWithOffset(offset = 0) {
    const childrenStrings = this.children
      .map(c => c.toStringWithOffset(offset + 1))
      .join('\n')
    return `${Node.offsetString(offset)}${this.name} ${this.childNumber}${childrenStrings.length > 0 ? '\n' : ''}${childrenStrings}`
  }

  static offsetString(offset) {
    let offsetString = ''
    for (let i = 0; i < offset; i++) {
      offsetString += '  '
    }
    return offsetString
  }

  paintOnSvg(xOffset = 0, yOffset = 0) {
    const childrenSvg = this.children
      .map(c => c.paintOnSvg(xOffset + 1, c.childNumber))

    const size = 30
    const x = xOffset * size
    const y = yOffset * size
    let dropLine = null

    if (this.children.length > 0) {
      const dropLineHeight = size * (this.children[this.children.length - 1].childNumber - this.childNumber)
      dropLine = <line x1={x + size / 4} y1={y + size / 2} x2={x + size / 4} y2={y + dropLineHeight + (size / 4) + (size / 8)}
                       style={{stroke: 'black', strokeWidth: size / 4}}/>
    }

    return (
      <g key={Math.random()}>
        <line x1={x - size + (size / 4)} y1={y + size / 4} x2={x} y2={y + size / 4} style={{stroke: 'black', strokeWidth: size / 4}}/>
        <Square size={size / 2} x={x} y={y}/>
        <text x={x + 2 * size / 3} y={y + size / 2}>{this.name}</text>
        {childrenSvg}
        {dropLine}
      </g>
    )
  }
}

export default (name = 'default name', childNumber = 7, children = []) => new Node(name, childNumber, children)