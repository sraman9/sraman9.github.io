import { projects, profile } from '../../../content/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: `${project.name} — ${profile.name}`, description: project.blurb };
}

// Turns a Loom share link into an embeddable one.
function embedUrl(url) {
  if (!url) return null;
  return url.replace('/share/', '/embed/').split('?')[0];
}

// content/site.js uses TODO as a placeholder marker — never show it to visitors.
const isDraft = (text) => !text || /^TODO\b/i.test(text.trim());

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  const video = embedUrl(project.video);
  const why = isDraft(project.why) ? null : project.why.split('\n\n').filter((p) => !isDraft(p));
  const body = (project.body || []).filter((p) => !isDraft(p));

  return (
    <main className="hero">
      <a className="back" href="/projects/">All projects</a>
      <h1 className="page-title">{project.name}</h1>
      {!isDraft(project.blurb) && <p className="lede">{project.blurb}</p>}

      <div className="actions">
        {project.live && <a className="button" href={project.live}>Launch</a>}
        {project.repo && <a href={project.repo}>Source</a>}
      </div>

      {video && (
        <div className="video">
          <iframe
            src={video}
            title={`${project.name} walkthrough`}
            allowFullScreen
            frameBorder="0"
          />
        </div>
      )}

      <div className="detail-body">
        {why && why.length > 0 && (
          <>
            <h2 className="sub-head">Why I built it</h2>
            {why.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
          </>
        )}

        {body.length > 0 && (
          <>
            <h2 className="sub-head">How it works</h2>
            {body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
          </>
        )}
      </div>

      <ul className="stack">
        {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
    </main>
  );
}
