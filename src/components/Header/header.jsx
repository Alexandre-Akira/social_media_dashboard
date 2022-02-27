import "./header.css";
import SwitchButton from "../SwitchButton/switchButton";

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <div className="header__wrapper">
        <h1 className="header__title">{title}</h1>
        <h2 className="header__subtitle">{subtitle}</h2>
      </div>
      <div className="header__divider"></div>
      <div className="header__switch">
        <SwitchButton />
      </div>
    </div>
  );
}

export default Header;
