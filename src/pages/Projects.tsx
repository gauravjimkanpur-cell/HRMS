import { Routes, Route } from "react-router-dom";

const Projects = () => {
  return (
    <Routes>
      <Route path="active" element={<h3>Active Projects</h3>} />
      <Route path="archived" element={<h3>Archived Projects</h3>} />
      <Route path="new" element={<h3>Create New Project</h3>} />
    </Routes>
  );
};
export default Projects;
