export default function ProjectTile({ project }) {
  const initials = project.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');

  return (
    <a className="tile" href={`/projects/${project.slug}/`}>
      <div className="tile-media">
        {project.image ? (
          <img src={project.image} alt="" />
        ) : (
          <span className="tile-initials" aria-hidden="true">{initials}</span>
        )}
      </div>
      <h2 className="tile-title">{project.name}</h2>
    </a>
  );
}
