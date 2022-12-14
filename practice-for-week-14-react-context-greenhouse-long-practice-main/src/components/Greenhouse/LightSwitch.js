import { useTheme } from '../../context/ThemeContext';
import './LightSwitch.css';

function LightSwitch() {

  const {themeName, setThemeName} = useTheme();

  function handleClickDay() {
    setThemeName("day");
  }

  function handleClickNight() {
    setThemeName("night");
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleClickDay}>DAY</div>
      <div className="off" onClick={handleClickNight}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;