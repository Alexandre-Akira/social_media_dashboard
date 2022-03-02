import "./header.css";
import SwitchButton from "../SwitchButton/switchButton";

const toggleDarkTheme = () => {
  const app = document.querySelector(".app");
  const label = document.querySelector(".switch__wrapper").firstChild;
  if (app.classList.contains("dark-theme")) {
    label.classList.remove("slider--hover-active");
    app.classList.toggle("dark-theme");
  } else {
    app.classList.toggle("dark-theme");
    label.classList.add("slider--hover-active");
  }
};

const activateHoverEffect = () => {
  const app = document.querySelector(".app");
  if (app.classList.contains("dark-theme")) {
    const label = document.querySelector(".switch__wrapper").firstChild;
    label.classList.add("slider--hover-active");
  }
};
const deactivateHoverEffect = () => {
  const app = document.querySelector(".app");
  if (app.classList.contains("dark-theme")) {
    const label = document.querySelector(".switch__wrapper").firstChild;
    label.classList.remove("slider--hover-active");
  }
};

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <div className="header__wrapper">
        <h1 className="header__title">{title}</h1>
        <h2 className="header__subtitle">{subtitle}</h2>
      </div>
      <div className="header__divider"></div>
      <div className="header__switch">
        <SwitchButton
          onClick={toggleDarkTheme}
          onMouseEnter={activateHoverEffect}
          onMouseLeave={deactivateHoverEffect}
        />
      </div>
    </div>
  );
}

export default Header;
