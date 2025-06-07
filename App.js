import React from "react";
import DashboardLayout from "./components/DashboardLayout";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <DashboardLayout>
      <h1>Welcome to the Maths & Physical Science Platform</h1>
      <Chatbot />
    </DashboardLayout>
  );
}

export default App;