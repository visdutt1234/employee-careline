import React, { useState } from 'react';
import DashBoard from '../DashBoard/DashBoard';
import "./Layout.scss";

function Layout(props) {
  const [points, setPoints] = useState(100);

  setTimeout(() => {
    setPoints(900)
  }, 1000);

  return <div className='layout-container'>
      <DashBoard points={points} userName={props.userName}/>
  </div>;
}

export default Layout;
