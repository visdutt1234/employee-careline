import React, { createRef, useEffect } from "react";
import TextArea from "../Components/Elements/TextArea";
import Photos from "../Components/Photos";
import Button from '../Components/Elements/Button';

function Home(props) {
  const ref =  createRef(null);
  console.log(ref, "Reff")

  useEffect(() => {
    console.log(ref, "Reff")
  }, [])
  return (
    <div className="ishnu" ref={ref}>
      <h1>Home</h1>
      <Photos name={props.name}/>
    </div>
  );
}

export default Home;
