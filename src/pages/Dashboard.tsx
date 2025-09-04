// src/pages/Dashboard.tsx
import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";  

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, BarController, BarElement, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const lineChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let lineChart: Chart | undefined;
    let barChart: Chart | undefined;

    if (lineChartRef.current) {
      lineChart = new Chart(lineChartRef.current, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [
            {
              label: "Logins",
              data: [30, 45, 60, 40, 70],
              borderColor: "#007bff",
              backgroundColor: "rgba(0,123,255,0.2)",
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true } },
          scales: { y: { beginAtZero: true } },
        },
      });
    }

    if (barChartRef.current) {
      barChart = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["CL", "SL", "PL"],
          datasets: [
            {
              label: "Leaves",
              data: [12, 8, 5],
              backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } },
        },
      });
    }    

    return () => {
      lineChart?.destroy();
      barChart?.destroy();
    };
  }, []);

  return (
    <div className="container py-4">
   

      {/* Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-primary h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Total Employees</h5>
              <p className="card-text display-6">120</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Total Leaves</h5>
              <p className="card-text display-6">25</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-warning h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Pending Approvals</h5>
              <p className="card-text display-6">7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-center">Logins This Week</h5>
              <canvas ref={lineChartRef} style={{ height: "250px" }}></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-center">Leave Types</h5>
              <canvas ref={barChartRef} style={{ height: "250px" }}></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
