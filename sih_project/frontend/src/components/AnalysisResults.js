// frontend/src/components/AnalysisResults.js
import React from "react";

function AnalysisResults({ result }) {
  if (!result) return null;

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        🔎 Analysis Results
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
        <p>
          <span className="font-semibold">🩸 Blood Detected:</span>{" "}
          {result.blood_detected ? "✅ Yes" : "❌ No"}
        </p>
        <p>
          <span className="font-semibold">⚠️ Severity Level:</span>{" "}
          {result.severity_level || "N/A"}
        </p>
        <p>
          <span className="font-semibold">📊 Confidence:</span>{" "}
          {result.confidence_percentage
            ? `${result.confidence_percentage}%`
            : "N/A"}
        </p>
        <p>
          <span className="font-semibold">🖐️ Affected Area:</span>{" "}
          {result.affected_area || "Unknown"}
        </p>
      </div>

      <div className="mt-6 space-y-4 text-gray-800">
        <p>
          <span className="font-semibold block">🛡️ Precautions:</span>
          <span className="block bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            {result.immediate_precautions || "No precautions provided."}
          </span>
        </p>
        <p>
          <span className="font-semibold block">💊 Treatment:</span>
          <span className="block bg-green-50 border-l-4 border-green-400 p-3 rounded">
            {result.treatment_recommendation || "No treatment provided."}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AnalysisResults;
