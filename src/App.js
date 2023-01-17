import React, { useEffect, useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  let previousWidth = -1;

  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      setIsOpen(!isMobile);
    }

    previousWidth = width;
  }

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth());
    return () => {
      window.removeEventListener("resize", updateWidth());
    }
  }, [])
  


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Content toggle={toggle} isOpen={isOpen} />
    </div>
  );
}

export default App;
