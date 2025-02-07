"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

const AnalyticsDashboard = () => {
  // Static data for KPIs
  const totalSales = 12500;
  const totalOrders = 1245;
  const popularProduct = "Comfy Chair";
  const userTraffic = 25400;

  // Static data for the chart
  const monthlySales = [500, 750, 400, 600, 900, 1200, 800, 700, 950, 1300, 1100, 1400];

  // Chart data
  const data: ChartData<"bar"> = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales ($)",
        data: monthlySales,
        backgroundColor: "#00B5A5", // Fallback color if gradient fails
        borderSkipped: false, // Ensures rounded bars
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Monthly Sales Overview",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "#2D3748",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#718096" },
      },
      y: {
        grid: { color: "#E2E8F0" },
        ticks: { color: "#718096" },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8 text-[#2D3748]">Analytics Dashboard</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Sales", value: `$${totalSales}`, color: "#00B5A5" },
            { title: "User Traffic", value: userTraffic, color: "#00A294" },
            { title: "Popular Product", value: popularProduct, color: "#FF5733" },
            { title: "Total Orders", value: totalOrders, color: "#FFC300" },
          ].map(({ title, value, color }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full`} style={{ backgroundColor: color }} />
                <div>
                  <h2 className="text-lg font-semibold text-[#4A5568]">{title}</h2>
                  <p className="text-2xl font-bold" style={{ color }}>{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
