// ** Logo
import logo from "@src/assets/images/logo/logos.png";
import "@styles/base/core/menu/menu-types/vertical-menu.scss";
const SpinnerComponent = () => {
  return (
    <div className="fallback-spinner app-loader">
      <h2 className="fallback-logo  brand-text text-dark">Waslna</h2>
      <div className="loading">
        <div className="effect-1 effects"></div>
        <div className="effect-2 effects"></div>
        <div className="effect-3 effects"></div>
      </div>
    </div>
  );
};

export default SpinnerComponent;
