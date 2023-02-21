import FooterContainer from "./components/sections/container/footerContainer/footerContainer";
import HeaderContainer from "./components/sections/container/headerContainer/headerContainer";
import SectionsContainer from "./components/sections/container/sectionsContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <SectionsContainer></SectionsContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
