import { Route, Routes ,useNavigate } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Mobi from "./Pages/mobi.jsx"

function App() {
  return (
      <>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* <Routes>
      <Route path="/mobi" element={<Mobi/>} />

      </Routes> */}
      </>
    );
}

export default App;
