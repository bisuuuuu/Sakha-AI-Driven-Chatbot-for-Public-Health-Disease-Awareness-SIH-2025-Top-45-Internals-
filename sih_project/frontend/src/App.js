import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Analyzer from "./pages/Analyzer";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/analyzer" replace />} />
          <Route path="/analyzer" element={<Analyzer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
