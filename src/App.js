import './App.css';
import Sidebar from './components/Sidebar';
import GroupLogo from './Images/GroupLogo.png'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import RobotsPage from './Pages/RobotsPage';
import SponsorsPage from './Pages/SponsorsPage';

function App() {
  let pathname = window.location.pathname;
  return (
    <div className="App">
      {
        //#region Header 
      }
      <div className="header"><picture><img src={GroupLogo} alt="Group logo" /></picture>SciFighters #16473
        <span id="header-links"><i className="fa-brands fa-youtube header-link" onClick={() => {
          window.location.href = "https://www.youtube.com/channel/UCAvjhx10eeqAYq6_kjmAqFg/featured"
        }}></i>
          <i className="fa-brands fa-instagram header-link" onClick={() => {
            window.location.href = "https://www.instagram.com/scifighters16473/"
          }}></i>
          <i className="fa-brands fa-spotify header-link" onClick={
            () => window.location.href = "https://open.spotify.com/show/0Oe06e8a4O22AMHFftqv8S?si=657194eb34804757&nd=1"}></i></span> </div>
      {
        //#endregion
      }

      {(pathname === "/home" || pathname === "/") &&
        <HomePage />
      } {pathname === "/about" &&
        <AboutPage />
      } {pathname === "/contact" &&
        <ContactPage />}
      {pathname === "/robots" &&
        <RobotsPage />}
      {pathname === "/sponsors" && <SponsorsPage />}
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
