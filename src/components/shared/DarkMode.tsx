/* eslint-disable jsx-a11y/label-has-associated-control */
import Sun from '../../assets/Sun.svg';
import Moon from '../../assets/Moon.svg';

import './DarkMode.css';

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
  };
  const setLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light');
  };
  const toggleTheme = (e: { target: { checked: boolean } }) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
