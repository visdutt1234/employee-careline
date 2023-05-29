import React, { startTransition, Suspense, useState } from "react";
import ErrorBoundary from "../Components/ErrorBoundary";
// import Comments from "../Components/Comments";
// import Photos from "../Components/Photos";
const Comments = React.lazy(() => import("../Components/Comments"));
const Photos = React.lazy(() => import("../Components/Photos"));

function About() {
  const [tab, setTab] = useState("photo");

  const handleTab = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <div>
      <h1>About</h1>
      <ul>
        <li onClick={() => handleTab("comment")}>Comments</li>
        <li onClick={() => handleTab("photo")}>Tab</li>
      </ul>
      <ErrorBoundary fallback={<div>Error in Content About...</div>}>
        <Suspense fallback={<div>Loading Content...</div>}>
          {tab === "photo" ? <Photos /> : <Comments />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default About;
