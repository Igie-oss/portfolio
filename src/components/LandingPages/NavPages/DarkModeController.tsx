import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
//icons
import { BsSun, BsMoonFill } from 'react-icons/bs'

const DarkModeController = () => {
  const [theme, setTheme] = useState<string | null>('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setTheme(localStorage.getItem('Theme') || ' ')
    const toggle = document.querySelector('html') as HTMLElement
    if (theme === 'dark') {
      toggle.classList.add('dark')
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
      toggle.classList.remove('dark')
    }
  }, [theme, isDarkMode])
  const toggleMode = () => {
    if (theme === 'dark') {
      localStorage.setItem('Theme', 'light')
      setIsDarkMode(false)
    } else {
      localStorage.setItem('Theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
    <button
      className="w-fit h-fit px-3 py-2 rounded-sm transition-all text-textLight dark:text-textDark lg:text-secondaryLight
        lg:dark:text-secondaryLight flex  border-[1px] border-blurLight text-xs font-semibold font-sans"
      onClick={toggleMode}
    >
      {isDarkMode ? (
        <BsMoonFill className=" w-4 h-4   mr-2" />
      ) : (
        <BsSun className=" w-4 h-4  mr-2" />
      )}
      Theme
    </button>
  )
}

export default DarkModeController
