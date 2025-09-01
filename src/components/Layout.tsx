import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        alert(`Error: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <header>
          <h2>Sidebar with Auto-Close Dropdowns</h2>
          <button onClick={toggleFullScreen}>⛶ Full Screen</button>
        </header>
        <div className="content">{children}</div>
        <footer>&copy; 2025 Sidebar UI</footer>
      </div>
    </div>
  );
};

export default Layout;
