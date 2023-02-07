// ** Dropdowns Imports
import UserDropdown from "./UserDropdown"
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
const NavbarUser = () => {
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
    <NavbarSearch />
    <NotificationDropdown/> 
    <UserDropdown />
      
    </ul>
  )
}
export default NavbarUser
