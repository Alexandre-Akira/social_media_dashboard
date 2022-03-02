import "./switchButton.css";

function SwitchButton({ onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div className="switch__wrapper" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <label htmlFor="dark_mode">Dark Mode</label>
      <label className="switch">
        <input id="dark_mode" type="checkbox" onClick={onClick} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default SwitchButton;
