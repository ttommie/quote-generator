import DarkMode from '../assets/darkMode.tsx'
import LightMode from '../assets/lightMode.tsx'

export interface HeaderProps {
  modeType: boolean
  onClick: () => void
}

function Header({ modeType, onClick }: HeaderProps) {
  return (
    <div className='flex justify-between items-center w-[474px]'>
      {/* Title */}
      <h1 className='font-inter text-4xl'>quote generator</h1>

      {/* Color Mode */}
      <div
        className='cursor-pointer flex justify-center items-center border-2 border-border w-10 h-10 rounded-lg hover:bg-buttonColor/20'
        onClick={onClick}
      >
        {modeType === true ? LightMode() : DarkMode()}
      </div>
    </div>
  )
}

export default Header
