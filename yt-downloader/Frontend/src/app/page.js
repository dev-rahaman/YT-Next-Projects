"use client";
import React, { useState } from "react";

const YTDownloader = () => {
  const [videoURL, setVideoURL] = useState("");
  const [videoInfo, setVideoInfo] = useState("");

  const handleChange = (e) => {
    setVideoURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/getVideoInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoURL }),
      });
      const data = await response.json();
      setVideoInfo(data);
    } catch (error) {
      console.error("error getting video info", error.message);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:5000/downloadVideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoURL }),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${videoInfo.title}.mp4`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("ERROR Downloading video", error.message);
      }
    } catch (error) {
      console.error("ERROR Downloading video", error.message);
    }
  };

  return (
    <div className="h-[500px] flex items-center justify-center flex-col border-8 p-3 border-purple-500 w-[500px] ">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={videoURL}
            onChange={handleChange}
            type="text"
            className="border p-2"
          />
          <button className="p-2 bg-gray-400">get info</button>
        </form>
      </div>
      {videoInfo && (
        <div className="my-5 flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold text-center">{videoInfo.title}</h2>
          <img src={videoInfo.thumbnail} className="w-[300px]" />
          <button onClick={handleDownload} className="p-2 bg-gray-400 mt-4">
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default YTDownloader;
