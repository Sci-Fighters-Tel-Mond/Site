import './App.css';
import Sidebar from './components/Sidebar';
import GroupLogo from './Images/GroupLogo.png'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import RobotsPage from './Pages/RobotsPage';
import SponsorsPage from './Pages/SponsorsPage';

function App() {
  let pathname = window.location.search;
  return (
    <div className="App">
      {
        //#region Header 
      }
      <div className="header"><picture><img src={GroupLogo} alt="Group logo" /></picture>SciFighters #16473
        <span id="header-links"><a href="https://www.youtube.com/channel/UCAvjhx10eeqAYq6_kjmAqFg/featured" target='_blank'><i className="fa-brands fa-youtube header-link"
        ></i></a>
          <a style={{ color: "rgb(51, 51, 51)" }} href="https://www.instagram.com/scifighters16473/" target='_blank'><i className="fa-brands fa-instagram header-link"></i></a>
          <a href="https://open.spotify.com/show/0Oe06e8a4O22AMHFftqv8S?si=657194eb34804757&nd=1" target='_blank'><i className="fa-brands fa-spotify header-link"></i></a></span> </div>
      {
        //#endregion
      }

      {(pathname === "?home" || pathname === '') &&
        <HomePage />
      } {pathname === "?about" &&
        <AboutPage />
      } {pathname === "?contact" &&
        <ContactPage />}
      {pathname === "?robots" &&
        <RobotsPage />}
      {pathname === "?sponsors" && <SponsorsPage />}
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
