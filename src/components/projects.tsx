import { ExternalArrow, MetaRow } from "@/components/maximal";
import type { Project } from "@/data/portfolio";

function ProjectStatus({
  status,
  accent,
}: {
  status: string;
  accent: Project["accent"];
}) {
  return (
    <span className={`project-status status-${accent}`}>
      <i aria-hidden="true" /> {status}
    </span>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="project-card-meta">
      <MetaRow label="TYPE" value={project.type} />
      <MetaRow label="YEAR" value={project.year} />
      <MetaRow label="ROLE" value={project.role} />
      <MetaRow label="STATUS" value={project.status} />
    </div>
  );
}

function ProjectStack({ items }: { items: string[] }) {
  return (
    <div className="project-card-stack">
      <span className="project-detail-label">
        STACK / {String(items.length).padStart(2, "0")}
      </span>
      <div>
        {items.map((item, index) => (
          <span className="project-stack-item" key={item}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectContributions({ items }: { items: string[] }) {
  return (
    <section className="project-card-contributions">
      <div className="project-detail-label">
        MY CONTRIBUTION{" "}
        <span>{String(items.length).padStart(2, "0")} ENTRIES</span>
      </div>
      <div className="project-contribution-grid">
        {items.map((item, index) => (
          <div className="project-contribution" key={item}>
            <strong>{String(index + 1).padStart(2, "0")} /</strong>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectLink({ project }: { project: Project }) {
  const links = [
    project.links.live && (
      <a
        className="project-card-cta"
        href={project.links.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View live project: ${project.title}`}
      >
        VIEW LIVE <ExternalArrow />
      </a>
    ),
    project.links.github && (
      <a
        className="project-card-cta project-card-cta-source"
        href={project.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View source for ${project.title}`}
      >
        VIEW SOURCE <ExternalArrow />
      </a>
    ),
  ].filter(Boolean);
  return links.length > 0 && <div className="project-card-links">{links}</div>;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card accent-${project.accent}`}
      id={`project-${project.index}`}
      aria-labelledby={`project-title-${project.index}`}
    >
      <div className="project-card-number" aria-hidden="true">
        {project.index}
      </div>
      <header className="project-card-header">
        <div className="project-card-heading">
          <div className="project-card-kicker">
            PROJECT_{project.index} / {project.type}
          </div>
          <h3 id={`project-title-${project.index}`}>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
        <ProjectStatus status={project.status} accent={project.accent} />
      </header>
      <div className="project-card-meta-wrap">
        <span className="project-detail-label">META / BUILD RECORD</span>
        <ProjectMeta project={project} />
      </div>
      <section className="project-card-build-grid">
        <div className="project-card-build">
          <span className="project-detail-label">THE BUILD</span>
          <p>{project.description}</p>
        </div>
        <div className="project-card-challenge">
          <span className="project-detail-label">THE CHALLENGE</span>
          <p>{project.challenge}</p>
        </div>
      </section>
      <ProjectContributions items={project.contribution} />
      <section className="project-card-outcome-stack">
        <div className="project-card-outcome">
          <span className="project-detail-label">THE OUTCOME</span>
          <p>{project.outcome}</p>
        </div>
        <ProjectStack items={project.tech} />
      </section>
      <footer className="project-card-footer">
        <span>STATUS / {project.status}</span>
        <ProjectLink project={project} />
      </footer>
    </article>
  );
}
