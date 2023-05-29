import React, { useState } from 'react'
import hocCounter from './hocCounter';

function HoverCounter(props) {
  return (
    <h2 onMouseOver={props.handleCounter}>Heading Counter {props.counter}</h2>
  )
}

export default hocCounter(HoverCounter)