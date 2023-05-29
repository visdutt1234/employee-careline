import React from 'react'

function Tab(props) {

  function tabHandler(sel) {
    props.onTabSelect(sel);
  }
  
  return (
    <div>
        <li onClick={() => tabHandler('photo')}>Photo tab</li>
        <li onClick={() => tabHandler('comment')}>Comments tab</li>
    </div>
  )
}

export default Tab