import { useClimateContext } from '../../context/ClimateContext';
import './ClimateStats.css';

function ClimateStats() {
  const { temperature } = useClimateContext();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {"y"}%
      </div>
    </div>
  )
}

export default ClimateStats;