import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        alert(`Error: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // clear token
    navigate("/login"); // redirect to login
  };

  // Hardcoded profile details
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "9px",
          }}
        >
          <div>
            <h2>HRMS</h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={toggleFullScreen}>⛶</button>

            {/* Profile Icon */}
            <div style={{ position: "relative" }} ref={dropdownRef}>
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>

              {/* Dropdown */}
              {showProfileDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: 0,
                    backgroundColor: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    borderRadius: "5px",
                    width: "200px",
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <strong>{profile.name}</strong>
                    <br />
                    <small>{profile.email}</small>
                  </div>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "none",
                      backgroundColor: "red",
                      color: "white",
                      cursor: "pointer",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="content">
          <Outlet />
        </div>

        <footer>&copy; 2025 Sidebar UI</footer>
      </div>
    </div>
  );
};

export default Layout;
