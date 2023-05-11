import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./components/sections/container/homeContainer/homeContainer"
import InitContainer from "./components/sections/container/initContainer/initContainer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitContainer></InitContainer>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
