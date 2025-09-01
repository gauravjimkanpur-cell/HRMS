import { Routes, Route } from "react-router-dom";

const Settings = () => {
  return (
    <Routes>
      <Route path="profile" element={<h3>Profile Settings</h3>} />
      <Route path="security" element={<h3>Security Settings</h3>} />
    </Routes>
  );
};
export default Settings;
