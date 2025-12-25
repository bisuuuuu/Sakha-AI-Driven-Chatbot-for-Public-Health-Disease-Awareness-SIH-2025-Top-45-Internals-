import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-lg font-semibold">Image Analyzer</h1>
      </header>
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </div>
  );
}

export default Layout;
