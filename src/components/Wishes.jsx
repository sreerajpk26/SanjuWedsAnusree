import { useEffect, useState } from 'react';
import { useWishes } from '../hooks/useWishes';
import { WEDDING } from '../config';
import './Wishes.css';

export default function Wishes({ opened, showToast }) {
  const { wishes, visibleCount, sending, load, loadMore, submit } = useWishes();
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (opened) load();
  }, [opened, load]);

  const handleSubmit = async () => {
    const n = name.trim();
    const m = msg.trim();
    if (!n || !m) {
      showToast('Please enter your name and wish');
      return;
    }
    await submit(n, m);
    setName('');
    setMsg('');
    showToast('Wish sent');
  };

  const count = wishes.length;

  return (
    <section className="notes" id="wishes">
      <div className="reveal wrap notes-grid">
        <div>
          <h2>Leave a wish</h2>
          <p className="notes-count">
            {count === 0 ? 'Be the first to write.' : `${count} ${count === 1 ? 'note' : 'notes'} so far`}
          </p>
          <form
            className="notes-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              aria-label="Your name"
            />
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder={`A wish for ${WEDDING.groomShort} & ${WEDDING.brideShort}`}
              aria-label={`A wish for ${WEDDING.groomShort} and ${WEDDING.brideShort}`}
            />
            <button type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send wish'}
            </button>
          </form>
        </div>
        <div className="notes-list">
          {wishes.slice(0, visibleCount).map((wish) => (
            <article key={wish.key}>
              <p className="note-name">{wish.name}</p>
              <p>{wish.msg}</p>
              {wish.time && <p className="note-time">{wish.time}</p>}
            </article>
          ))}
          {visibleCount < wishes.length && (
            <button type="button" className="notes-more" onClick={loadMore}>
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
