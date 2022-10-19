import React, { useState } from "react";
import { Header } from "../Common/Header";
import NewsData from "./NewsData";

export function Headlines() {
  const [theme, setTheme] = useState("light");
  const [themeIcon, setThemeIcon] = useState("moon");
  const [value, setvalue] = useState("");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeIcon("sun");
    } else {
      setTheme("light");
      setThemeIcon("moon");
    }
  };

  const handleText = (e) => {
    setvalue(e.target.value);
    // console.log(e.target.value)
  };

  return (
    <>
      <Header
        handleText={handleText}
        theme={theme}
        themeIcon={themeIcon}
        value={value}
        toggleTheme={toggleTheme}
      />
      <NewsData 
      value={value} 
      handleText={handleText} 
      />
    </>
  );
}
