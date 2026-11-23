import { COUPLE_PHOTO, WEDDING } from '../config';
import Events from './Events';
import Lotus from './Lotus';
import './Landing.css';

function guestNameFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return (params.get('to') || params.get('name') || '').trim();
}

export default function Landing({ onEnter }) {
  const guest = guestNameFromUrl();

  return (
    <div className="opening">
      <figure className="portrait">
        <img
          src={import.meta.env.BASE_URL + COUPLE_PHOTO}
          alt={`${WEDDING.groomFull} and ${WEDDING.brideFull}`}
        />
      </figure>
      <div className="invite">
        <Lotus />
        <p className="invoke" lang="sa">॥ श्री गणेशाय नमः ॥</p>
        {guest && <p className="for-guest">For {guest}</p>}
        <h1>
          {WEDDING.groomShort}
          <em>&amp;</em>
          {WEDDING.brideShort}
        </h1>
        <p className="invite-line">are getting married</p>
        <Events onEnter={onEnter} />
      </div>
    </div>
  );
}
