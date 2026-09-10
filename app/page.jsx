import { profile, projects, experience } from '../content/site';
import ProjectTile from '../components/ProjectTile';

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <main>
      <section className="hero">
        <h1 className="display">{profile.name}</h1>
        {profile.tagline && <p className="lede">{profile.tagline}</p>}
        <p className="badge-line">
          {profile.schoolBadge ? (
            <img className="badge-img" src={profile.schoolBadge} alt="" />
          ) : (
            <span className="badge-mark" aria-hidden="true">UW</span>
          )}
          <span>{profile.school}</span>
        </p>
      </section>

      {experience && experience.length > 0 && (
        <section className="band">
          <h2 className="section-head">Experience</h2>
          {experience.map((job) => (
            <div className="entry" key={`${job.company}-${job.dates}`}>
              <div className="entry-dates">{job.dates}</div>
              <div>
                <h3>{job.role}, {job.company}</h3>
                <p className="muted">{job.summary}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="band">
        <h2 className="section-head">Projects</h2>
        <div className="tiles">
          {featured.map((project) => (
            <ProjectTile key={project.slug} project={project} />
          ))}
        </div>
        <p className="more-link">
          <a href="/projects/">All projects</a>
        </p>
      </section>
    </main>
  );
}
