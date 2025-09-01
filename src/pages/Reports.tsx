import { Routes, Route } from "react-router-dom";

const Reports = () => {
  return (
    <Routes>
      <Route path="monthly" element={<h3>Monthly Reports</h3>} />
      <Route path="yearly" element={<h3>Yearly Reports</h3>} />
    </Routes>
  );
};
export default Reports;
