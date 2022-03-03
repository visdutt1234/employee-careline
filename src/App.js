import logo from "./logo.svg";
import "./App.scss";
// import Header from "./Components/Header/Header";
// import SideMenu from "./Components/SideMenu/SideMenu";
// import Layout from "./Components/Layout/Layout";
import { useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import SectionCard from "./Components/SectionCard/SectionCard";

function App() {  
  // const [openMenu, setOpenMenu] = useState(false);
  // const handleOpenMenu = () => {
  //   openMenu ? setOpenMenu(false) : setOpenMenu(true);
  // }

  return (
    <>
      {/* <Header cb={handleOpenMenu} />
      <main>
        <SideMenu isOpen={openMenu} />
        <Layout />
      </main> */}

      <Navigation/>
      <SectionCard/>
    </>
  );
}

export default App;
