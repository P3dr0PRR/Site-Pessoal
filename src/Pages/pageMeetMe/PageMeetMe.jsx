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
      className={`min-h-screen py-12 px-8 sm:px-10 lg:px-12 cursor-default`}
      style={{
        backgroundImage: isDark
          ? "url('/bgsideral.png')"
          : "linear-gradient(to right, #bfdbfe, #06b6d4)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative inline-flex transition-all hover:scale-105">
          <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/40 animate-pulse"></div>
          <img
            src={pedroImage}
            alt="Foto de Pedro"
            className={`relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 ring-2 ring-blue-500 shadow-lg border-blue-500 ${isDark ? "shadow-white/40" : "shadow-blue-300"} `}
          />
        </div>
        <h1
          className={`mt-6 text-xl md:text-2xl font-bold text-center ${isDark ? "text-white" : "text-zinc-800"}`}
        >
          Olá, eu sou Pedro!
        </h1>
        <ButtonLightDark isDark={isDark} toggleTheme={toggleTheme} />
        <LinksTo isDark={isDark} />
        <p
          className={`mt-4 text-center  ${isDark ? "bg-white/20 rounded-md text-white" : "text-zinc-800"}`}
        >
          Conteudo criado para ampliar meus conhecimentos :D
        </p>
      </div>
    </div>
  );
}
