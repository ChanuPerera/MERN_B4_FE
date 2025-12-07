import React, { useCallback, useState } from "react";

export default function UseCallBackEx() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const themeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: theme === "light" ? "#fff" : "#121212",
        color: theme === "light" ? "#121212" : "#fff",
        padding: "50px",
      }}
    >
      <h2>useCallBack Example</h2>
      <h3>Count : {count}</h3>

      <button
        onClick={increment}
        className="mt-4 rounded-full bg-teal-500 px-4 py-2 mx-4"
      >
        Increment Count
      </button>
      <button
        onClick={themeToggle}
        className="mt-4 rounded-full bg-purple-500 px-4 py-2 mx-4"
      >
        Toggle Theme
      </button>
    </div>
  );
}
