import { profile, projects } from '../content/site';
import ProjectTile from '../components/ProjectTile';

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <main>
      <section className="hero">
        <h1 className="display">{profile.name}</h1>
        <p className="badge-line">
          {profile.schoolBadge ? (
            <img className="badge-img" src={profile.schoolBadge} alt="" />
          ) : (
            <span className="badge-mark" aria-hidden="true">UW</span>
          )}
          <span>{profile.school}</span>
        </p>
      </section>

      <section className="band">
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
