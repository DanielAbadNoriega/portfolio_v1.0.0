import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import InitContainer from "./components/sections/container/initContainer/initContainer"
import AboutmeContainer from "./components/sections/container/aboutmeContainer/aboutmeContainer";
import SkillsContainer from "./components/sections/container/skillsContainer/skillsContainer";
import ContactContainer from "./components/sections/container/contactContainer/contactContainer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitContainer></InitContainer>}></Route>
        <Route path="/init" element={<InitContainer></InitContainer>}></Route>
        <Route path="/about" element={<AboutmeContainer></AboutmeContainer>}></Route>
        <Route path="/skills" element={<SkillsContainer></SkillsContainer>}></Route>
        <Route path="/contact" element={<ContactContainer></ContactContainer>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
