import React from "react";

export function LinksTo() {
  return (
    <div className="flex flex-col bg-white/20 p-4 rounded-lg shadow-lg gap-4 text-xl">
      <a
        className="rounded-lg p-2 border-2 border-gray-400 text-center hover:scale-105 transition-transform duration-300"
        href="https://portif-i97470w6k-pedros-projects-dd604c73.vercel.app/"
      >
        Ver meu Portifolio
      </a>
      <a
        className="rounded-lg p-2 border-2 border-gray-400 text-center hover:scale-105 transition-transform duration-300"
        href="https://www.linkedin.com/in/pedrocadev"
      >
        LinkedIn
      </a>
      <a
        className="rounded-lg p-2 border-2 border-gray-400 text-center hover:scale-105 transition-transform duration-300"
        href="https://github.com/P3dr0PRR"
      >
        GitHub
      </a>
    </div>
  );
}
