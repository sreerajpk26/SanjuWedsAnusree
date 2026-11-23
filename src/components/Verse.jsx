import { BLESSINGS, VERSE } from '../config';
import Lotus from './Lotus';
import './Verse.css';

export default function Verse() {
  const lines = VERSE.sanskrit
    .split('।')
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <section className="words" id="blessing">
      <div className="reveal words-inner">
        <blockquote className="shloka">
          <Lotus />
          <p className="words-sanskrit" lang="sa">
            {lines.map((line, index) => (
              <span key={line}>{index === 0 ? `${line} ।` : line}</span>
            ))}
          </p>
          <p>{VERSE.english}</p>
          <cite>ऋग्वेद · {VERSE.reference}</cite>
        </blockquote>
        <p className="words-lead">{BLESSINGS[0]}</p>
        <p className="words-next">{BLESSINGS[1]}</p>
      </div>
    </section>
  );
}
