import "./switchButton.css";

function SwitchButton() {
  return (
    <div className="switch__wrapper">
      <label htmlFor="dark_mode">Dark Mode</label>
      <label className="switch">
        <input id="dark_mode" type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default SwitchButton;
