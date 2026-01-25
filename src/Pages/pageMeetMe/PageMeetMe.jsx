import React, { useState } from "react";
import pedroImage from "../../foto/Pedro.jpg";
import { ButtonLightDark } from "./Pages/butonLight/themeColor";
import { LinksTo } from "./Pages/linkArea/LinksTo";

export function PageMeetMe() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-r from-slate-900 to-slate-700"
          : "bg-gradient-to-r from-blue-200 to-cyan-200"
      } py-12 px-8 sm:px-10 lg:px-12`}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src={pedroImage}
          alt="Foto de Pedro"
          className={`w-28 h-28 md:w-32 md:h-32 rounded-full border-4 shadow-lg ${isDark ? "border-yellow-600" : "border-blue-500"}`}
        />
        <h1
          className={`mt-6 text-xl md:text-2xl font-bold text-center ${isDark ? "text-yellow-600" : "text-zinc-700"}`}
        >
          Olá, eu sou o Pedro!
        </h1>
        <ButtonLightDark isDark={isDark} toggleTheme={toggleTheme} />
        <LinksTo isDark={isDark} />
        <p
          className={`mt-4 text-center ${isDark ? "text-yellow-600" : "text-zinc-800"}`}
        >
          Conteudo criado para ampliar meus conhecimentos :D
        </p>
      </div>
    </div>
  );
}
