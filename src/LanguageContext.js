"use client"
import { createContext, useEffect, useState } from "react"
import { english } from "./components/utils/english"
import { arabic } from "./components/utils/arabic"

const LanguageContext = createContext({})

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english")

  useEffect(() => {
    const language = localStorage.getItem("language")
    if (language) {
      setLanguage(language)
    }
  }, [language])

  const changeLanguage = () => {
    if (language === "arabic") {
      setLanguage("english")
      localStorage.setItem("language", "english")
    } else {
      setLanguage("arabic")

      localStorage.setItem("language", "arabic")
    }
  }

  let lang = {}
  if (language === "english") {
    lang = english
  } else {
    lang = arabic
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        language,
        setLanguage,
        changeLanguage,
      }}>
      {children}
    </LanguageContext.Provider>
  )
}
const LanguageConsumer = LanguageContext.Consumer

export { LanguageProvider, LanguageConsumer, LanguageContext }
