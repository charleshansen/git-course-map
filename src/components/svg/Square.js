import React from 'react'

export default ({size = '15', x = '0', y = '0'}) => (
  <rect width={size} x={x} y={y} height={size} style={{fill: 'rgb(0,0,255)', strokeWidth: 3, stroke: 'rgb(0,0,0)'}}/>
)