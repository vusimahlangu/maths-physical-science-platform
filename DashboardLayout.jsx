import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 240, background: "#1e293b", color: "white", padding: 24 }}>
        <h2>Dashboard</h2>
        <nav>
          <a href="#" style={{ color: "white", display: "block", margin: "16px 0" }}>Courses</a>
          <a href="#" style={{ color: "white", display: "block", margin: "16px 0" }}>Profile</a>
          <a href="#" style={{ color: "white", display: "block", margin: "16px 0" }}>Payments</a>
          <a href="#" style={{ color: "white", display: "block", margin: "16px 0" }}>Chatbot</a>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32, background: "#f1f5f9" }}>
        {children}
      </main>
    </div>
  );
}