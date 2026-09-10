import { projects, profile } from '../../content/site';
import ProjectTile from '../../components/ProjectTile';

export const metadata = { title: `Projects — ${profile.name}` };

export default function Projects() {
  return (
    <main className="hero">
      <h1 className="page-title">Projects</h1>
      <div className="tiles">
        {projects.map((project) => (
          <ProjectTile key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
