import AppContext from "./AppContext"
import React, { useContext, useState } from "react"
const ThemeLanguageSwitcher=()=>
{
const { theme,toggleTheme,language,switchLanguage } = useContext(AppContext);
return(
  <>
    <h2>Theme for the day is {theme}</h2>
        <button onClick={toggleTheme}>{theme}</button>
    <p>Current language: {language}</p>
        <button onClick={() => switchLanguage("English")}>English</button>
        <button onClick={() => switchLanguage("Spanish")}>Spanish</button>
  </>
)
}
export default ThemeLanguageSwitcher