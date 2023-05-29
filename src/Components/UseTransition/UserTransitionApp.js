import React, { Suspense, useState, useTransition } from "react";
import TabButton from "./TabButton";
import About from "./About";
import Contact from "./Contact";
import Posts from "./Posts";

function UserTransitionApp() {
  const [tab, setTab] = useState("about");
  const [isPending, setTransition] = useTransition();

  function selectTab(nextTab) {
    setTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <Suspense fallback={<h1>🌀 Loading...</h1>}>
      <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "post"} onClick={() => selectTab("post")}>
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === "contact"}
        onClick={() => selectTab("contact")}
      >
        Contact's
      </TabButton>
      {isPending && <h1>Loading...</h1>}
      {tab === "about" && <About />}
      {tab === "post" && <Posts />}
      {tab === "contact" && <Contact />}
      <h1>{tab}</h1>
      <input
        type="text"
        value={tab}
        onChange={(e) => selectTab(e.target.value)}
      />
    </Suspense>
  );
}

export default UserTransitionApp;
