// ** Dropdowns Imports
import UserDropdown from "./UserDropdown"
import NotificationDropdown from './NotificationDropdown'
import Translate from "./translate"
const NavbarUser = () => {
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
    
    <Translate/>
    <NotificationDropdown/> 
    <UserDropdown />
    
      
    </ul>
  )
}
export default NavbarUser
