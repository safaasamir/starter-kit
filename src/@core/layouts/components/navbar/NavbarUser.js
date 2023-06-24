// ** Dropdowns Imports
import UserDropdown from "./UserDropdown"
import NotificationDropdown from './NotificationDropdown'
import IntlDropdown from "./IntlDropdown"
const NavbarUser = () => {
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
    
    {//<IntlDropdown/>
    }
    <NotificationDropdown/> 
    <UserDropdown />
    
      
    </ul>
  )
}
export default NavbarUser
