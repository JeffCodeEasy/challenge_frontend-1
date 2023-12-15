import logo from '../assets/images/logo.svg'
import { Navbar } from './NavBar'

export const Header = () => {
  return (
    <div className=' flex place-content-between items-center mb-[31px] '>
        <img src={logo} alt="Logo" />
        <Navbar/>
    </div>
  )
}
