import { about, aboutPhoto, profile } from '../../content/site';

export const metadata = { title: `About — ${profile.name}` };

export default function About() {
  return (
    <main className="hero">
      <h1 className="page-title">About</h1>
      <div className={aboutPhoto ? 'about-grid' : ''}>
        {aboutPhoto && <img className="about-photo" src={aboutPhoto} alt={profile.name} />}
        <div>
          {about.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
        </div>
      </div>
    </main>
  );
}
