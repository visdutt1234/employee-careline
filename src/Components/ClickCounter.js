import React, { useState } from 'react';
import hocCounter from './hocCounter';

function ClickCounter(props) {
  return (
    <button className='button' onClick={props.handleCounter}>Clicked {props.counter} times</button>
  )
}

export default hocCounter(ClickCounter)