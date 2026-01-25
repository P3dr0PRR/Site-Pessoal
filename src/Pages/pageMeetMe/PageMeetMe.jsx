import React from "react";
import pedroImage from "../../foto/Pedro.jpg";
import { ButtonLightDark } from "./Pages/butonLight/themeColor";
import { LinksTo } from "./Pages/linkArea/LinksTo";

export function PageMeetMe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-indigo-400 py-12 px-8 sm:px-10 lg:px-12">
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src={pedroImage}
          alt="Foto de Pedro"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="mt-6 text-xl md:text-2xl font-bold text-zinc-700 text-center">
          Olá, eu sou o Pedro!
        </h1>
        <ButtonLightDark />
        <LinksTo />
        Conteudo criado para ampliar meus conhecimentos :D
      </div>
    </div>
  );
}
