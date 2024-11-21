import LightMode from '../assets/lightMode.svg'
import DarkMode from '../assets/darkMode.svg'

const Header = () => (
    <div className="flex justify-between items-center w-[474px]">
      {/* Title */}
      <h1 className="font-inter text-4xl">quote generator</h1>

      {/* Color Mode */}
      <div className=" flex justify-center items-center border-2 w-10 h-10 rounded-lg hover:shadow-[inset_0px_0px_50px_0px_#ffffff1A]">
        <img src={LightMode} alt="lightmode" width="17" height="25" />
      </div>
    </div>
  )

export default Header
