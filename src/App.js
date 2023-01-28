import "./styles/App.css";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";

const navbarItems = [
  { title: "About Me" },
  { title: "Portfolio" },
  { title: "Contact" },
  { title: "Resume" },
];

const style = {
  height: "100vh",
};

function App() {
  return (
    <div className="App" style={style}>
      <Navigation items={navbarItems} />
      <Content />
      <Footer items={navbarItems} />
    </div>
  );
}

export default App;
