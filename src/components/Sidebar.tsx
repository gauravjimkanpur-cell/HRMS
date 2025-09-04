import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
      <div className=" toggle-btn2" >
      <button  className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
       <h2 style={{ margin:"10px 20px"}}>HRMS</h2>
       </div>
      <ul>
        <li>
          <div className="menu-item">
            <span className="icon">🏠</span>
            <NavLink to="/" className="text">Dashboard</NavLink>
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
            <li><NavLink to="/projects/active">Active</NavLink></li>
            <li><NavLink to="/projects/archived">Archived</NavLink></li>
            <li><NavLink to="/projects/new">Create New</NavLink></li>
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
            <li><NavLink to="/reports/monthly">Monthly</NavLink></li>
            <li><NavLink to="/reports/yearly">Yearly</NavLink></li>
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
            <li><NavLink to="/settings/profile">Profile</NavLink></li>
            <li><NavLink to="/settings/security">Security</NavLink></li>
          </ul>
        </li>

        {/* Help */}
        <li>
          <div className="menu-item">
            <span className="icon">❓</span>
            <NavLink to="/help" className="text">Help</NavLink>
          </div>
        </li>
      </ul> 
    </nav>
  );
};

export default Sidebar;
