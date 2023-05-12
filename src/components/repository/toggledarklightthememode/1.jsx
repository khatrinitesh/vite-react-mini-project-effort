import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

export default function ToggleDarkLightThemeMode() {

    const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <>
      <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />
    </>
  )
}
