import './globals.css';
import { profile } from '../content/site';

export const metadata = {
  title: profile.name,
  description: `${profile.name} — ${profile.school}, UW–Madison.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="wrap">
          <header className="masthead">
            <a className="mark" href="/">{profile.name}</a>
            <nav>
              <a href="/projects/">Projects</a>
              <a href="/about/">About</a>
              <a href={`mailto:${profile.email}`}>Contact</a>
            </nav>
          </header>
          {children}
          <footer className="site">
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
            {profile.resume && <a href={profile.resume}>Resume</a>}
          </footer>
        </div>
      </body>
    </html>
  );
}
