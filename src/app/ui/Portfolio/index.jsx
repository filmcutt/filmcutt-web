import React, { useState } from "react";
import Div from "../Div";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("short");

  const videos = {
    short: [
      "https://www.youtube.com/embed/_OWTCNMBS18",
      "https://www.youtube.com/embed/LDeLSMOsAp0",
      "https://www.youtube.com/embed/seIeTJ7ykLE",
    ],
    long: [
      "https://www.youtube.com/embed/ONFqYa5Aa5E",
      "https://www.youtube.com/embed/2byPP_9F0-Q",
      "https://www.youtube.com/embed/isMecFjGAjE",
      "https://www.youtube.com/embed/VWUQp6MqQXw",
      "https://www.youtube.com/embed/tVLnzcoM5LE",
    ],
    business: [
      "https://www.youtube.com/embed/trRW92vO8YA",
    ]
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center px-4 md:px-10 py-20">

      {/* ---------- TITLE ---------- */}
      <h2 className="text-4xl font-bold mb-10 text-center">
        Our Recent Work
      </h2>

      {/* ---------- TABS ---------- */}
      <div className="flex gap-10 border-b border-gray-700 pb-4 mb-12">
        <TabButton
          active={activeTab === "short"}
          onClick={() => setActiveTab("short")}
          label="Short Video Editing"
        />
        <TabButton
          active={activeTab === "long"}
          onClick={() => setActiveTab("long")}
          label="Long Video Editing"
        />
        <TabButton
          active={activeTab === "business"}
          onClick={() => setActiveTab("business")}
          label="Business Ad"
        />
      </div>

      {/* ---------- VIDEOS AREA (FULL SCREEN FEEL) ---------- */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos[activeTab].map((src, index) => (
          <div
            key={index}
            className="
              w-full 
              h-[70vh]
              bg-gray-900
              rounded-xl
              overflow-hidden
              border border-gray-800
            "
          >
            <iframe
              src={src}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>

    </section>
  );
}

/* ---------- TAB BUTTON ---------- */
function TabButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`text-lg font-medium pb-2 transition-all ${
        active
          ? "text-purple-500 border-b-2 border-purple-500"
          : "text-gray-400 hover:text-purple-400"
      }`}
    >
      {label}
    </button>
  );
}
