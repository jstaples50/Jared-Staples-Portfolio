import "./styles/App.css";
import { useState } from "react";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

const navbarItems = [
  { title: "About Me", section: <AboutMe /> },
  { title: "Portfolio", section: <Portfolio /> },
  { title: "Contact", section: <Contact /> },
  { title: "Resume", section: <Resume /> },
];

const style = {
  height: "100vh",
};

function App() {
  const [sectionRendered, setSectionRendered] = useState(<AboutMe />);

  const handleSectionRendered = (section) => {
    const navObject = navbarItems.find((object) => {
      return object.title === section;
    });
    setSectionRendered(navObject.section);
  };

  return (
    <div className="App" style={style}>
      <Navigation
        items={navbarItems}
        handleSectionRendered={handleSectionRendered}
      />
      <Content sectionRendered={sectionRendered} />
      <Footer items={navbarItems} />
    </div>
  );
}

export default App;
