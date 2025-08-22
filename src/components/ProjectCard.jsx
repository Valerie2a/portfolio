import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="project" aria-labelledby={`${project.slug}-title`}>
      <img src={project.image} alt={project.imageAlt} loading="lazy" />
      <div className="project__body">
        <h3 id={`${project.slug}-title`}>{project.title}</h3>

        <p className="project__desc">{project.description}</p>

        {/* --- NOUVEAU : Difficultés & apprentissages --- */}
        {project.difficulty && (
          <p className="project__difficulty">
            <span className="project__difficulty-label">Difficultés & apprentissages :</span>{" "}
            {project.difficulty}
          </p>
        )}

        <ul className="project__tags">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project__links">
          {project.demo && (
            <a className="btn btn--sm" href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {project.repo && (
            <a className="btn btn--sm btn--ghost" href={project.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
