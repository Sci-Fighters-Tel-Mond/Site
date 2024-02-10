import './App.css';
import React from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import Sidebar from './components/Sidebar';
import GroupLogo from './Images/GroupLogo.png';
import { getPageByPathname } from './components/SidebarData';

function App() {
  let pathname = window.location.search;
  if (pathname === '') {
    pathname = "?home";
    window.location.search = "?home";
  }

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <HamburgerMenu />
        <picture>
          <img src={GroupLogo} alt="Group logo" id="header-logo" />
        </picture>
        <span id="header-text">SciFighters #16473</span>
      </div>

      {/* Render the page based on the current pathname */}
      {getPageByPathname(pathname)}

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
