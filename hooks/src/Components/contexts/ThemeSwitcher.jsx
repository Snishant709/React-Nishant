import React,{useContext, useState} from "react";
import ThemeContext from "./ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h1>Theme for the day is {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
}


export default ThemeSwitcher