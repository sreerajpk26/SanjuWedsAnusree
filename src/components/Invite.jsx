import { WEDDING } from '../config';
import './Invite.css';

export default function Invite() {
  return (
    <section className="invite">
      <div className="reveal panel">
        <p className="kicker">With their families’ blessings</p>
        <p>
          {WEDDING.groomFull} and {WEDDING.brideFull} request the pleasure of your presence as they
          begin their life together.
        </p>
      </div>
    </section>
  );
}
