import { useState } from "react";
import ThemeContext from "./ThemeContext";
const ThemeProvider=({children})=>
{
    const [theme,setTheme]=useState("light")
    const toggleTheme=()=>setTheme(theme==="light"?"dark":"light")
    return
    (
        {children}

    );
}