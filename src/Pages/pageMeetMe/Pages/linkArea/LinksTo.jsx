import React, { useState } from "react";

export function LinksTo({ isDark }) {
  return (
    <div
      className={`flex flex-col p-4 rounded-lg shadow-lg gap-4 text-xl ${isDark ? "bg-gray-800/70" : "bg-sky-100 text-gray-900"}`}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-lg p-2 border-2 ${isDark ? "bg-gray-800 border-gray-800 text-gray-100 hover:bg-blue-800/80 hover:border-blue-500" : "bg-sky-200/80 hover:bg-sky-300 hover:border-sky-400"} text-center hover:scale-105 transition-transform duration-300`}
        href="https://portif-i97470w6k-pedros-projects-dd604c73.vercel.app/"
      >
        Ver meu Portifolio
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-lg p-2 border-2 ${isDark ? "bg-gray-800 border-gray-800 text-gray-100 hover:bg-blue-800/80 hover:border-blue-500" : "bg-sky-200/80 hover:bg-sky-300 hover:border-sky-400"} text-center hover:scale-105 transition-transform duration-300`}
        href="https://www.linkedin.com/in/pedrocadev"
      >
        LinkedIn
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-lg p-2 border-2 ${isDark ? "bg-gray-800 border-gray-800 text-gray-100 hover:bg-blue-800/80 hover:border-blue-500" : "bg-sky-200/80 hover:bg-sky-300 hover:border-sky-400"} text-center hover:scale-105 transition-transform duration-300`}
        href="https://github.com/P3dr0PRR"
      >
        GitHub
      </a>
    </div>
  );
}
