import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleDropdown = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className={`sidebar ${collapsed ? "closed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
        <li>
          <div className="menu-item">
            <span className="icon">🏠</span>
            <Link to="/" className="text">Dashboard</Link>
          </div>
        </li>

        {/* Projects */}
        <li>
          <div
            className="menu-item"
            onClick={() => handleDropdown("projects")}
          >
            <span className="icon">📁</span>
            <span className="text">Projects</span>
            {!collapsed && <span className={`arrow ${openMenu === "projects" ? "rotate" : ""}`}>▶</span>}
          </div>
          <ul className={`submenu ${openMenu === "projects" ? "open" : ""}`}>
            <li><Link to="/projects/active">Active</Link></li>
            <li><Link to="/projects/archived">Archived</Link></li>
            <li><Link to="/projects/new">Create New</Link></li>
          </ul>
        </li>

        {/* Reports */}
        <li>
          <div
            className="menu-item"
            onClick={() => handleDropdown("reports")}
          >
            <span className="icon">📊</span>
            <span className="text">Reports</span>
            {!collapsed && <span className={`arrow ${openMenu === "reports" ? "rotate" : ""}`}>▶</span>}
          </div>
          <ul className={`submenu ${openMenu === "reports" ? "open" : ""}`}>
            <li><Link to="/reports/monthly">Monthly</Link></li>
            <li><Link to="/reports/yearly">Yearly</Link></li>
          </ul>
        </li>

        {/* Settings */}
        <li>
          <div
            className="menu-item"
            onClick={() => handleDropdown("settings")}
          >
            <span className="icon">⚙️</span>
            <span className="text">Settings</span>
            {!collapsed && <span className={`arrow ${openMenu === "settings" ? "rotate" : ""}`}>▶</span>}
          </div>
          <ul className={`submenu ${openMenu === "settings" ? "open" : ""}`}>
            <li><Link to="/settings/profile">Profile</Link></li>
            <li><Link to="/settings/security">Security</Link></li>
          </ul>
        </li>

        {/* Help */}
        <li>
          <div className="menu-item">
            <span className="icon">❓</span>
            <Link to="/help" className="text">Help</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
