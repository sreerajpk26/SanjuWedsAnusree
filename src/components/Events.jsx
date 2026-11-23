import { CONTACTS, EVENTS, EVENT_NOTE } from '../config';
import Countdown from './Countdown';
import './Events.css';

export default function Events({ onEnter }) {
  const event = EVENTS[0];
  const hour = event.time.replace(/^Muhurtham\s+/i, '');

  return (
    <section className="details" aria-label="Wedding details">
      <p className="details-day">Sunday</p>
      <p className="details-date">31 January 2027</p>
      <p className="details-sub">{event.dateSub}</p>
      <p className="details-hour">
        Muhurtham
        <span>{hour}</span>
      </p>
      <p className="details-place">{event.venue}</p>
      <p className="details-address">{event.address}</p>
      <p className="details-note">{EVENT_NOTE}</p>
      <div className="actions">
        <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" onClick={onEnter}>
          Directions
        </a>
        {CONTACTS.map((contact) => (
          <a key={contact.tel} className="ghost" href={`tel:${contact.tel}`} onClick={onEnter}>
            +91 {contact.label}
          </a>
        ))}
      </div>
      <Countdown />
    </section>
  );
}
