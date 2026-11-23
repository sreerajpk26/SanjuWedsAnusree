import { FAMILIES } from '../config';
import Lotus from './Lotus';
import './Families.css';

function parentLine(family) {
  const late = /^late\s+/i.test(family.father);
  const father = family.father.replace(/^late\s+/i, '');
  const child = family.side.startsWith('GROOM') ? 'Son' : 'Daughter';
  return `${child} of ${family.mother} and ${late ? `the late ${father}` : father}`;
}

function siblingLine(family) {
  if (!family.sibling) return '';
  const word = family.sibling.label === 'SISTER' ? 'Sister' : 'Brother';
  return `${word} of ${family.sibling.name}`;
}

export default function Families() {
  return (
    <section className="houses">
      <div className="reveal houses-inner">
        <Lotus />
        <p className="houses-lead">With their parents’ blessings</p>
        <div className="house-grid">
          {FAMILIES.map((family) => (
            <article key={family.side}>
              <h2>{family.name}</h2>
              <p>{parentLine(family)}</p>
              <p>{siblingLine(family)}</p>
              <p className="house-home">{family.residence}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
