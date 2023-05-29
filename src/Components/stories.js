function PhotoStory(props) {
  console.log(props);
  return (
    <>
      <div>
        {props.trueUser && <h4>Hello, True User</h4>}
        <h1>{props.heading}</h1>Photos story
      </div>
    </>
  );
}

function VideoStory(props) {
  return (
    <div>
      {props.trueUser && <h4>Hello, True User</h4>}
      <h1>{props.heading}</h1>Photos story
    </div>
  );
}

export { PhotoStory, VideoStory };
