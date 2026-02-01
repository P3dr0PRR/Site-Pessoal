import React, { useState } from "react";
import pedroImage from "../../fotos/Pedro.jpg";
import { ButtonLightDark } from "./Pages/butonLight/themeColor";
import { LinksTo } from "./Pages/linkArea/LinksTo";

export function PageMeetMe() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen py-4 px-8 sm:px-10 lg:px-12 cursor-default
    ${
      isDark
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
        : "bg-gradient-to-r from-blue-400 to-cyan-600"
    }`}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative inline-flex transition-all hover:scale-105">
          <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/40 animate-pulse"></div>
          <img
            src={pedroImage}
            alt="Foto de Pedro"
            loading="eager"
            decoding="async"
            className={`relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 ring-2  ${isDark ? "shadow-white/40 ring-blue-600 shadow-lg border-blue-600" : "shadow-blue-300 ring-blue-700 shadow-lg border-blue-700"} `}
          />
        </div>
        <div
          className={`flex flex-col ${isDark ? "text-zinc-800" : "bg-sky-100/60 text-gray-900 rounded-md items-center justify-center px-4 pb-2 shadow-lg shadow-blue-300/50 ring-2 ring-blue-500"}`}
        >
          <h2
            className={`mt-6 text-md md:text-xl text-center ${isDark ? "text-white" : "text-zinc-800"}`}
          >
            Olá, eu sou
          </h2>
          <h1
            className={` text-xl md:text-2xl font-bold text-center ${isDark ? "text-white" : "text-zinc-800"}`}
          >
            Pedro Paulo
          </h1>
          <h2
            className={` text-md md:text-xl text-center ${isDark ? "text-white" : "text-zinc-800"}`}
          >
            Front-end Jr | JS • React • TailwindCSS
          </h2>
        </div>
        <ButtonLightDark isDark={isDark} toggleTheme={toggleTheme} />
        <LinksTo isDark={isDark} />
        <p
          className={`mt-4 text-center  ${isDark ? "bg-black/80 rounded-md text-gray-100 ring-2 ring-blue-500 px-1" : "bg-sky-100/60 text-gray-900 rounded-md items-center justify-center px-4  shadow-lg shadow-blue-300/50 ring-2 ring-blue-500"}`}
        >
          Conteudo criado para ampliar meus conhecimentos :D
        </p>
      </div>
    </div>
  );
}
