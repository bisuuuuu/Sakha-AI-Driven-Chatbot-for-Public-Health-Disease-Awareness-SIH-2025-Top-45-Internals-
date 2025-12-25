// frontend/src/components/ImageUploadZone.js
import React, { useState, useRef } from "react";
import axios from "axios";
import AnalysisResults from "./AnalysisResults";

function ImageUploadZone() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const apiBase = process.env.REACT_APP_API_URL;

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const uploadRes = await axios.post(`${apiBase}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = uploadRes.data.file_url;

      const analyzeRes = await axios.post(`${apiBase}/analyze`, {
        image_url: imageUrl,
      });

      setResult(analyzeRes.data);
    } catch (err) {
      console.error("Upload/Analyze error:", err);
    } finally {
      setLoading(false);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStreaming(true);
    } catch (err) {
      console.error("Camera access error:", err);
      alert("Could not access the camera. Please allow camera permissions.");
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 300, 200);
    canvasRef.current.toBlob((blob) => {
      const capturedFile = new File([blob], "capture.jpg", { type: "image/jpeg" });
      setFile(capturedFile);
    }, "image/jpeg");
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Upload or Capture Image
      </h2>

      {/* File upload */}
      <label className="block text-center py-2 px-4 rounded-xl bg-blue-50 text-blue-700 font-semibold cursor-pointer hover:bg-blue-100">
        📂 Choose from Files
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
      </label>

      {/* Camera */}
      {!streaming ? (
        <button
          onClick={startCamera}
          className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold shadow hover:bg-green-600"
        >
          📷 Open Camera
        </button>
      ) : (
        <div className="flex flex-col items-center space-y-3">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            width="300"
            height="200"
            className="rounded-lg border shadow"
          />
          <canvas ref={canvasRef} width="300" height="200" className="hidden"></canvas>
          <button
            onClick={capturePhoto}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600"
          >
            📸 Capture Photo
          </button>
        </div>
      )}

      {/* Preview */}
      {file && (
        <div className="flex justify-center">
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-64 h-64 object-cover rounded-xl border shadow"
          />
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 
          text-white py-3 rounded-xl font-semibold shadow hover:opacity-90 
          transition disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {/* Results */}
      {result && <AnalysisResults result={result} />}
    </div>
  );
}

export default ImageUploadZone;
