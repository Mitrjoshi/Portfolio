import { useEffect, useState } from 'react'
import { IconBrightness } from '@tabler/icons-react'

export default function ThemeButton() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark

    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      data-dark={isDark}
      onClick={toggleTheme}
      className="hover:bg-primary/15 data-[dark=true]:text-primary aspect-square cursor-pointer rounded-full p-2 duration-200"
    >
      <IconBrightness
        className={`${isDark ? '0' : '-rotate-180'} duration-200`}
        stroke={2}
        size={20}
      />
    </button>
  )
}
