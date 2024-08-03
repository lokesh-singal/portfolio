import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  const [tab, setTab] = useState("Home");
  return (
    <>
      <Header setTab={setTab} />
      {tab == "Home" && <Home setTab={setTab} />}
      {tab == "About" && <About />}
      {tab == "Projects" && <Projects />}
      {tab == "Contact" && <Contact />}
      <Footer />
    </>
  );
}

export default App;
