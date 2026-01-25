import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ButtonLightDark() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className=" flex items-center justify-center">
        <button
          onClick={toggleTheme}
          className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg"
          aria-label="Toggle theme"
        >
          <Sun
            className={`w-4 h-4 text-yellow-500 absolute inset-2 transition-all duration-300 ${
              isDark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          />
          <Moon
            className={`w-4 h-4 text-blue-300 transition-all duration-300 ${
              isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
