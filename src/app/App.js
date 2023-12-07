import Image from "next/image"
import styles from "./page.module.css"
import { LanguageProvider } from "@/LanguageContext"
import HomeIndex from "@/components/pages/HomeIndex"

export default function App() {
  return (
    <LanguageProvider>
      <HomeIndex />
    </LanguageProvider>
  )
}
