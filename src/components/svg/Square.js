import React from 'react'

export default ({size = '15', x = '0', y = '0'}) => (
  <rect width={size} x={x} y={y} height={size}/>
)