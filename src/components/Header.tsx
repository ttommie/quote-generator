import { useState } from 'react'
import DarkMode from '../assets/darkMode.tsx'
import LightMode from '../assets/lightMode.tsx'

function Header() {
  const [darkTheme, setDarkTheme] = useState(true)

  // TODO: Allow the switch of dark theme to change the style of the entire website
  const HandleColor = (e: React.MouseEvent<HTMLDivElement>) => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className='flex justify-between items-center w-[474px]'>
      {/* Title */}
      <h1 className='font-inter text-4xl'>quote generator</h1>

      {/* Color Mode */}
      <div
        className='flex justify-center items-center border-2 border-border w-10 h-10 rounded-lg hover:shadow-[inset_0px_0px_50px_0px_#FFFFFF33]'
        onClick={(e) => HandleColor(e)}
      >
        {darkTheme ? DarkMode() : LightMode()}
      </div>
    </div>
  )
}

export default Header
