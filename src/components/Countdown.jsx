import { useCountdown } from '../hooks/useCountdown';
import { WEDDING } from '../config';
import './Countdown.css';

const UNITS = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['mins', 'Minutes'],
  ['secs', 'Seconds'],
];

export default function Countdown() {
  const parts = useCountdown(WEDDING.dateTime);

  return (
    <div className="count" aria-label="Time until the muhurtham">
      {UNITS.map(([key, label]) => (
        <div key={key}>
          <span className="count-num">{parts[key]}</span>
          <span className="count-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
