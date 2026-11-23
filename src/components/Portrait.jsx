import { COUPLE_PHOTO, WEDDING } from '../config';
import './Portrait.css';

export default function Portrait() {
  return (
    <section className="portrait">
      <div className="reveal portrait-arch">
        <img
          src={import.meta.env.BASE_URL + COUPLE_PHOTO}
          alt={`${WEDDING.groomFull} and ${WEDDING.brideFull}`}
        />
        <p className="portrait-names">
          {WEDDING.groomShort} <em>&amp;</em> {WEDDING.brideShort}
        </p>
      </div>
    </section>
  );
}
