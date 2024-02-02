import './App.css';
import Sidebar from './components/Sidebar';
import GroupLogo from './Images/GroupLogo.png'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import RobotsPage from './Pages/RobotsPage';
import SponsorsPage from './Pages/SponsorsPage';
import FixedFooter from './components/FixedFooter';

function App() {
  let pathname = window.location.search;
  return (
    <div className="App">
      {
        //#region Header 
      }
      <div className="header"><picture><img src={GroupLogo} alt="Group logo" id="header-logo" /></picture><span id="header-text">SciFighters #16473</span></div>
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
      {pathname === "?projects" && <ProjectsPage />}
      <Sidebar></Sidebar>
      <FixedFooter></FixedFooter>
    </div>
  );
}

export default App;
