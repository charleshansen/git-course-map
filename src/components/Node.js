import React from 'react'

import Square from './Square'

const childrenHorizontalLine = node => {
  if (node.children.length === 0) return

  // Doesn't include children under last
  const numChildrenBetweenFirstAndLast = node.deepNumberOfChildren - node.children[node.children.length - 1].deepNumberOfChildren;
  const height = numChildrenBetweenFirstAndLast * 25 + 12.5

  return <line key={Math.random()}
               x1="7.5"
               y1="15"
               x2="7.5"
               y2={height}
               style={{stroke: 'black', strokeWidth: '10'}}/>
}

const childrenVerticalLines = children => {
  let numberPreviousHiddenChildren = 0 // By 'hidden' we mean children of the children we're mapping over
  return children
    .map((child, currentChildCount) => {
      const height = 7.5 + (1 + currentChildCount + numberPreviousHiddenChildren) * 25
      const childPainting = <line key={Math.random()}
                                  x1="7.5"
                                  y1={height}
                                  x2="30"
                                  y2={height}
                                  style={{stroke: 'black', strokeWidth: '10'}}/>
      numberPreviousHiddenChildren += child.deepNumberOfChildren
      return childPainting
    })
}

const childrenBlocks = (children, xOffset) => {
  let numberPreviousHiddenChildren = 0 // By 'hidden' we mean children of the children we're mapping over
  return children
    .map((child, currentChildCount) => {
      const childPainting = <Node key={Math.random()}
                                  subject={child}
                                  xOffset={xOffset + 1}
                                  yOffset={currentChildCount + numberPreviousHiddenChildren + 1}/>
      numberPreviousHiddenChildren += child.deepNumberOfChildren
      return childPainting
    })
}

const Node = ({subject, xOffset = 0, yOffset = 0}) => (
  <g key={Math.random()} transform={`translate(${xOffset === 0 ? 0 : 25},${25 * yOffset})`}>
    <Square size="15"/>
    <text x="20" y="12.5">{subject.name}</text>
    {childrenHorizontalLine(subject)}
    {childrenVerticalLines(subject.children)}
    {childrenBlocks(subject.children, xOffset)}
  </g>
)

export default Node