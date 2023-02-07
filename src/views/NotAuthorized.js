// ** React Imports
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Utils
import {} from "@utils";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/bus.svg";
import illustrationsDark from "@src/assets/images/pages/bus-dark.svg";
import buslogo from "@src/assets/images/pages/logo.svg";
// ** Styles
import "@styles/base/pages/page-misc.scss";
const LogoBus = buslogo;
const NotAuthorized = () => {
  // ** Hooks
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div className="misc-wrapper">
      <Link className="brand-logo" to="/">
      <img src={LogoBus} alt="LogoBus" width="60"/>
      <h2 className="brand-text ms-1 my-auto" style={{fontFamily:'PT Serif', color:"black"}}>Waslna</h2>
      </Link>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">You are not authorized! 🔐</h2>
          <p className="mb-2">
            The Webtrends Marketing Lab website in IIS uses the default IUSR
            account credentials to access the web pages it serves.
          </p>
          <Button
            tag={Link}
            color="primary"
            className="btn-sm-block mb-1"
            to={"/"}
          >
            Back to Home
          </Button>
          <img className="img-fluid" src={source}  width= " 500" alt="Not authorized page" />
        </div>
      </div>
    </div>
  );
};
export default NotAuthorized;
