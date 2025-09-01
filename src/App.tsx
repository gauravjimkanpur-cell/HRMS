import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/reports/*" element={<Reports />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Layout>
  );
};

export default App;
