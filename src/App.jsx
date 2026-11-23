import { useCallback, useState } from 'react';
import Landing from './components/Landing';
import Verse from './components/Verse';
import Families from './components/Families';
import Wishes from './components/Wishes';
import MusicControl from './components/MusicControl';
import Toast from './components/Toast';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [heard, setHeard] = useState(false);
  const [toast, setToast] = useState('');
  const mainRef = useReveal(true);

  const showToast = useCallback((msg) => {
    setToast(msg);
  }, []);

  return (
    <>
      <MusicControl active={heard} />
      <div ref={mainRef} className="main">
        <Landing onEnter={() => setHeard(true)} />
        <Families />
        <Verse />
        <Wishes opened showToast={showToast} />
      </div>
      <Toast message={toast} onDone={() => setToast('')} />
    </>
  );
}
