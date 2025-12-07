import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


//////CONSUMER COMPONENT

const Home = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return(
        <div className={`min-h-screen flex flex-col items-center justify-center transition-all 
        ${theme === "light" ? "bg-gray-100 text-black": "bg-gray-900 text-white"}`}>
                <h1 className="text-3xl font-bold mb-4"> Theme Switcher</h1>
                <p className="mb-6 text-lg">
                    Current theme :{" "} <span className="font-semibold text-blue-600">
                        {theme}
                        </span>
                </p>
         
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-full bg-cyan-700
                     text-white hover:bg-cyan-600 transition"
                >
                    Toggle Theme
                </button>
        </div>
    );
}

export default Home;